import React from 'react'
import { staticRender } from './utils/staticRender'
import { asyncModalRenderImp } from './utils/asyncModalRenderImp'
import type { AsyncModalProps, ComputeAsyncModalProps } from './types'

/**
 * 直接将组件渲染到 container 元素下
 * 这是一个独立的工具函数，不需要依赖 Context 或 Hook
 *
 * @param Comp 需要渲染的 React 组件
 * @param props 组件的 props (其中 onOk 和 onCancel 会被自动处理)
 * @param container 挂载的容器 DOM 元素。如果不传，会自动在 body 下创建一个 div 并挂载
 * @param options 配置选项
 * @param options.quiet 是否开启静默模式。开启后，取消操作不会抛出错误。
 * @returns 返回一个 Promise，resolve 值为 onOk 回调的参数
 */
export async function asyncModalRender<D extends AsyncModalProps, Quiet extends boolean>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D>,
  container?: Element,
  options?: { quiet: Quiet }
) {
  const [dom, promise] = asyncModalRenderImp<D>(Comp, props ?? ({} as ComputeAsyncModalProps<D>), {
    onClose: () => closeFunc(),
    quiet: options?.quiet
  });
  let uninstallEffect = () => {};
  let realContainer = container;
  if (!realContainer) {
    realContainer = document.createElement('div');
    document.body.appendChild(realContainer);
    uninstallEffect = () => realContainer!.remove();
  }
  const uninstall = await staticRender(dom, realContainer);
  const closeFunc = () => {
    uninstall();
    uninstallEffect();
  };
  return promise;
}
