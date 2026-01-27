import React from 'react'
import { AsyncModalDestroyOptions } from '../types';

type Key = string | symbol | number;
export interface ElementsHolderRef {
  patchElement: (element: React.ReactElement, key?: Key, openField?: Key) => () => void;
  removeElement: (options: AsyncModalDestroyOptions) => void;
}

export default React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement, removeElement] = usePatchElement()
    React.useImperativeHandle(ref, () => ({ patchElement, removeElement }), [patchElement, removeElement])
    return <>{elements.map((item) => item.element)}</>
  }),
)

const usePatchElement = (): [
  { key: Key | undefined; element: React.ReactElement }[],
  (element: React.ReactElement, key?: Key, openField?: Key) => () => void,
  (options: AsyncModalDestroyOptions) => void,
] => {
  const [elements, setElements] = React.useState<{ key: Key | undefined; element: React.ReactElement; openField?: Key }[]>([])
  const patchElement = React.useCallback((element: React.ReactElement, key?: Key, openField?: Key) => {
    setElements((originElements) => {
      if (key !== undefined) {
        const index = originElements.findIndex((item) => item.key === key);
        if (index > -1) {
          const nextElements = [...originElements];
          nextElements[index] = { key, element, openField };
          return nextElements;
        }
      }
      return [...originElements, { key, element, openField }];
    })
    return () => {
      setElements((originElements) => originElements.filter((item) => {
        // 仅移除当前引用的 element，避免误删同 key 但已被替换的新 element
        return item.element !== element;
      }))
    }
  }, [])

  const removeElement = React.useCallback((options: AsyncModalDestroyOptions) => {
    const { persistent, visibility } = options;
    setElements((originElements) => originElements.filter((item) => {
      // 仅针对持久化弹窗
      if (item.key === undefined) {
        return true;
      }

      // 如果指定了 persistent key，则只处理匹配的
      if (persistent !== undefined && item.key !== persistent) {
        return true;
      }

      // 检查可见性
      if (visibility) {
        const isOpen = item.element.props[item.openField || 'open'];
        if (visibility === 'visible' && !isOpen) return true;
        if (visibility === 'hidden' && isOpen) return true;
      }

      return false;
    }))
  }, [])

  return [elements, patchElement, removeElement]
}
