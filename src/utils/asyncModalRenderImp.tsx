import React, { ComponentProps } from 'react';
import { AsyncModalProps, ComputeAsyncModalProps, QuietType } from '../types';
import { AsyncModalRenderCancelError } from './AsyncModalRenderCancelError';

export type ReturnType<D extends AsyncModalProps, Quiet extends QuietType = undefined> = Exclude<D['onOk'], undefined> extends (v: infer R) => void
  ? ComputeQuiet<Quiet, R>
  : never;

/**
 * 计算 Quiet 模式下的返回值类型
 * 若 Quiet 为 true，则返回类型包含 undefined (取消时)
 */
export type ComputeQuiet<Quiet extends QuietType = undefined, R = never> = Quiet extends true ? R | undefined : R;

interface AsyncModalOptions<Quiet extends QuietType = undefined> {
  onClose: VoidFunction;
  quiet?: Quiet;
}

/**
 * 弹窗入参、交互、创建的统一实现
 * @param Comp
 * @param props
 * @param options
 */
export function asyncModalRenderImp<D extends AsyncModalProps, Quiet extends QuietType = undefined>(
  Comp: React.ComponentType<D>,
  props: ComputeAsyncModalProps<D>,
  options: AsyncModalOptions<Quiet>,
): [React.ReactElement, Promise<ReturnType<D, Quiet>>, (error: Error) => void] {
  let dom: React.ReactElement | null = null;
  let localReject: (error: Error) => void;
  const promise = new Promise<ReturnType<D, Quiet>>((resolve, reject) => {
    localReject = reject;
    const onOk = (v: ReturnType<D, Quiet>, ...args: unknown[]) => {
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
        resolve(undefined as ReturnType<D, Quiet>);
        props?.onCancel?.();
      }
    };
    dom = <Comp {...(props as ComponentProps<typeof Comp>)} onOk={onOk} onCancel={onCancel} />;
  });
  return [dom!, promise, localReject!];
}
