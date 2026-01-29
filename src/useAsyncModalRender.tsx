import React, { useCallback, useMemo } from 'react';
import ElementsHolder, { ElementsHolderRef } from './components/ElementsHolder';
import {
  AsyncModalDestroyOptions,
  AsyncModalRender,
  AsyncModalRenderFactory,
  AsyncModalRenderPersistent,
  AsyncModalRenderPersistentFactory,
  AsyncModalRenderQuiet,
  AsyncModalRenderQuietFactory,
} from './types';
import { asyncModalRenderImp } from './utils/asyncModalRenderImp';
import { PersistentComponentConflictError } from './utils/PersistentComponentConflictError';

/**
 * useAsyncModalRender Hook
 * 提供在组件中渲染异步弹窗的能力
 *
 * @returns {UseAsyncModalRenderReturn} 返回包含 render, destroy 等方法的对象
 */
export function useAsyncModalRender() {
  // hook 的挂载方式，依靠 ElementsHolder
  const holderRef = React.useRef<ElementsHolderRef>(null);
  const holder = useMemo(() => <ElementsHolder key="component-holder" ref={holderRef} />, []);

  // render 链接统一的实现 asyncModalImp
  const render = useCallback<AsyncModalRender>((Comp, props, options) => {
    const { persistent, openField, quiet } = options ?? {};

    const realProps = props ?? ({} as any);

    const isPersistent = persistent && openField;
    if (isPersistent) {
      // @ts-ignore
      realProps[openField] = true;
      const old = holderRef.current!.getElement(persistent);
      if (old) {
        if (old.component !== Comp) {
          // 组件构造器不同会导致 React 状态丢失，抛出错误
          const error = new PersistentComponentConflictError(persistent);
          const rejectedPromise = Promise.reject(error);
          return Object.assign(rejectedPromise, { destroyModal: () => {} });
        }
      }
    }

    const [dom, promise] = asyncModalRenderImp(Comp, realProps, {
      onClose: () => {
        if (isPersistent) {
          // 如果是持久化模式，关闭时不移除元素，而是将 openField 设置为 false
          const closedDom = React.cloneElement(dom, { [openField]: false });
          holderRef.current!.patchElement(closedDom, Comp, persistent, openField);
        } else {
          // 只有非持久化模式才执行移除逻辑
          closeFunc();
        }
      },
      quiet,
    });
    const closeFunc = holderRef.current!.patchElement(dom, Comp, persistent, openField);
    return Object.assign(promise, { destroyModal: closeFunc });
  }, []);

  /**
   * 销毁指定的持久化弹窗 或 全部 的持久化弹窗
   */
  const destroy = useCallback((options: AsyncModalDestroyOptions) => {
    holderRef.current!.removeElement(options);
  }, []);

  const renderQuiet = useCallback<AsyncModalRenderQuiet>(
    (Comp, props, options) => {
      return render(Comp, props, { ...options, quiet: true });
    },
    [render],
  );

  const renderPersistent = useCallback<AsyncModalRenderPersistent>(
    (Comp, props, options) => {
      return render(Comp, props, options);
    },
    [render],
  );

  // 创建 render 的工厂函数
  const renderFactory = useCallback<AsyncModalRenderFactory>(
    (Comp, props, options) => {
      const unmounts: VoidFunction[] = [];
      const func = () => {
        const promise = render(Comp, props, options);
        unmounts.push(promise.destroyModal);
        return promise;
      };
      return Object.assign(func, { destroyModal: () => unmounts.forEach((v) => v()) });
    },
    [render],
  );

  const renderFactoryQuiet = useCallback<AsyncModalRenderQuietFactory>(
    (Comp, props, options) => renderFactory(Comp, props, { ...options, quiet: true }),
    [render],
  );

  const renderFactoryPersistent = useCallback<AsyncModalRenderPersistentFactory>(
    (Comp, props, options) => renderFactory(Comp, props, options),
    [render],
  );

  return {
    render,
    holder,
    renderFactory,
    destroy,
    renderQuiet,
    renderPersistent,
    renderFactoryQuiet,
    renderFactoryPersistent,
  };
}
