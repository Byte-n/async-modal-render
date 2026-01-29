import React, {
  cloneElement,
  ComponentType,
  forwardRef,
  memo,
  ReactElement,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { AsyncModalDestroyOptions } from '../types';

type Persistent = string | symbol | number;

export interface ElementsHolderRef {
  patchElement: PatchElement;
  removeElement: RemoveElement;
  getElement: GetElement;
}

interface Ele {
  id: number;
  persistent: Persistent | undefined;
  element: ReactElement;
  openField?: Persistent;
  component: ComponentType<any>;
}

interface PatchElement {
  (element: ReactElement, component: ComponentType<any>, persistent?: Persistent, openField?: Persistent): VoidFunction;
}

interface RemoveElement {
  (options: AsyncModalDestroyOptions): void;
}

interface GetElement {
  (persistent: Persistent): Ele | undefined;
}

export default memo(
  forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement, removeElement, getElement] = usePatchElement()
    useImperativeHandle(ref, () => ({ patchElement, removeElement, getElement }), [patchElement, removeElement, getElement])
    return <>{elements.map((item) => item.element)}</>
  }),
)

const usePatchElement = (): [Ele[], PatchElement, RemoveElement, GetElement] => {
  const [elements, setElements] = useState<Ele[]>([]);
  const incrKeyRef = useRef(1);
  const elementsRef = useRef<Ele[]>([]);
  elementsRef.current = elements;

  const patchElement = useCallback<PatchElement>((ele, component, persistent, openField) => {
    // 生成唯一的 patch ID，用于清理
    const id = incrKeyRef.current++;
    const key = `async-modal-${Math.random().toString(36).slice(2)}-${id}`;

    setElements((originElements) => {
      let element = ele;
      if (persistent !== undefined) {
        const index = originElements.findIndex((item) => item.persistent === persistent);
        if (index > -1) {
          const nextElements = originElements.slice();
          // 维持原本的key不变
          element = cloneElement(element, { key: nextElements[index].element.key });
          nextElements[index] = {
            id,
            persistent,
            element,
            openField,
            component,
          };
          return nextElements;
        }
      }
      // 新增元素，使用唯一 key
      element = cloneElement(element, { key });
      return originElements.concat({
        id,
        persistent,
        element,
        openField,
        component,
      })
    });

    return () => {
      setElements((originElements) =>
        originElements.filter((item) => {
          // 通过 ID 精确移除，避免引用对比的副作用问题
          // 如果该元素已被新的 patch 更新，id 会变化，旧的 cleanup 将失效（符合预期）
          return item.id !== id;
        }),
      );
    };
  }, []);

  const removeElement = useCallback<RemoveElement>((options) => {
    const { persistent, visibility } = options;
    setElements((originElements) =>
      originElements.filter((item) => {
        // 仅针对持久化弹窗
        if (item.persistent === undefined || item.persistent === null) {
          return true;
        }

        // 如果指定了 persistent persistent，则只处理匹配的
        if (persistent !== undefined && persistent !== null && item.persistent !== persistent) {
          return true;
        }

        // 检查可见性
        if (visibility && item.openField !== undefined && item.openField !== null) {
          const isOpen = item.element.props[item.openField];
          if (visibility === 'visible' && !isOpen) return true;
          if (visibility === 'hidden' && isOpen) return true;
        }

        return false;
      }),
    );
  }, []);

  const getElement = useCallback<GetElement>((persistent) => {
    return elementsRef.current.find((item) => item.persistent === persistent);
  }, []);

  return [elements, patchElement, removeElement, getElement];
};
