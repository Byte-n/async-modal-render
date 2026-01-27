import React, { ComponentProps } from 'react';
import { AsyncModalProps, ComputeAsyncModalProps } from '../types';
import { AsyncModalRenderCancelError } from './AsyncModalRenderCancelError';

type ReturnType<D extends AsyncModalProps> = D['onOk'] extends (v: infer R) => void ? R : never;

interface AsyncModalOptions {
  onClose: VoidFunction
}

let incrKey = 1;

/**
 * 弹窗入参、交互、创建的统一实现
 * @param Comp
 * @param props
 * @param options
 */
export function asyncModalRenderImp<D extends AsyncModalProps>(
  Comp: React.ComponentType<D>,
  props: ComputeAsyncModalProps<D>,
  options: AsyncModalOptions,
): [React.ReactElement, Promise<ReturnType<D>>] {
  let dom: React.ReactElement | null = null;
  const promise = new Promise<ReturnType<D>>((resolve, reject) => {
    const onOk = (v: ReturnType<D>) => {
      options.onClose();
      resolve(v);
      props?.onOk?.(v);
    };
    const onCancel = (err: any) => {
      const realError = err === undefined ? new AsyncModalRenderCancelError() : err;
      options.onClose();
      reject(realError);
      props?.onCancel?.(realError);
    };
    dom = <Comp {...(props as ComponentProps<typeof Comp>)} key={incrKey++} onOk={onOk} onCancel={onCancel} />;
  });
  return [dom!, promise];
}
