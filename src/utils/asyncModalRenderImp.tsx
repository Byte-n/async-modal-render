import React, { ComponentProps } from 'react';
import { AsyncModalProps, ComputeAsyncModalProps } from '../types';
import { AsyncModalRenderCancelError } from './AsyncModalRenderCancelError';

type ReturnType<D extends AsyncModalProps> = D['onOk'] extends (v: infer R) => void ? R : never;

interface AsyncModalOptions {
  onClose: VoidFunction
  quiet?: boolean
}

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
): [React.ReactElement, Promise<ReturnType<D>>, (error: Error) => void] {
  let dom: React.ReactElement | null = null;
  let localReject: (error: Error) => void;
  const promise = new Promise<ReturnType<D>>((resolve, reject) => {
    localReject = reject;
    const onOk = (v: ReturnType<D>, ...args: unknown[]) => {
      options.onClose();
      resolve(v);
      props?.onOk?.(v, ...args);
    };
    const onCancel = (err: any) => {
      options.onClose();
      if (!options.quiet) {
        const realError = err === undefined ? new AsyncModalRenderCancelError() : err;
        reject(realError);
        props?.onCancel?.(realError);
      } else {
        resolve(undefined as ReturnType<D>);
        props?.onCancel?.();
      }
    };
    dom = <Comp {...(props as ComponentProps<typeof Comp>)} onOk={onOk} onCancel={onCancel} />;
  });
  return [dom!, promise, localReject!];
}
