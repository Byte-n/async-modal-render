import React, { ComponentProps, useCallback, useMemo } from 'react';
import ElementsHolder, { ElementsHolderRef } from './components/ElementsHolder';
import { asyncModalRenderImp } from './utils/asyncModalRenderImp';
import type { AsyncModalRender, AsyncModalRenderFactory, ComputeAsyncModalProps, UseAsyncModalRenderReturn, AsyncModalRenderOptions, AsyncModalDestroyOptions } from './types';

/**
 * useAsyncModal 的 Hook 封装
 */
export function useAsyncModalRender(): UseAsyncModalRenderReturn {
  // hook 的挂载方式，依靠 ElementsHolder
  const holderRef = React.useRef<ElementsHolderRef>(null);
  const holder = useMemo(() => <ElementsHolder key="component-holder" ref={holderRef} />, []);

  // render 链接统一的实现 asyncModalImp
  const render = useCallback<AsyncModalRender>((Comp, props, options) => {
    const { persistent, openField } = options ?? {};

    type PT = ComponentProps<typeof Comp>;
    const realProps = props ?? ({} as ComputeAsyncModalProps<PT>);

    if (persistent && openField) {
      // @ts-ignore
      realProps[openField] = true;
    }

    const [dom, promise] = asyncModalRenderImp(
      Comp,
      realProps,
      {
        onClose: () => {
          if (persistent && openField) {
            // 如果是持久化模式，关闭时不移除元素，而是将 openField 设置为 false
            const closedDom = React.cloneElement(dom, { [openField]: false });
            holderRef.current!.patchElement(closedDom, persistent, openField);
          } else {
            // 只有非持久化模式才执行移除逻辑
            closeFunc();
          }
        },
      },
    );

    const closeFunc = holderRef.current!.patchElement(dom, persistent, openField);
    return promise;
  }, []);

  // 创建 render 的工厂函数
  const renderFactory = useCallback<AsyncModalRenderFactory>((Comp, props, options) => () => render(Comp, props, options), [render]);

  /**
   * 销毁指定的持久化弹窗 或 全部 的持久化弹窗
   */
  const destroy = useCallback((options: AsyncModalDestroyOptions) => {
    holderRef.current!.removeElement(options);
  }, []);
  return {
    render,
    holder,
    renderFactory,
    destroy,
  };
}
