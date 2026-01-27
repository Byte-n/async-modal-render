import React from 'react';

export interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}

type KS = keyof AsyncModalProps;
export type ComputeAsyncModalProps<D extends AsyncModalProps> = Pick<D, Exclude<keyof D, KS>> & Partial<Pick<D, KS>>;

export type AsyncModalRenderOptions<D> = {
  /**
   * 状态持久化的key，若不传，则关闭时直接销毁弹窗。
   */
  persistent: string ,
  /**
   * 控制弹窗展示隐藏的prop key
   */
  openField: ExtractBooleanKeys<D>,
}

type ExtractBooleanKeys<T> = {
  [K in keyof T]: Required<T>[K] extends boolean ? K : never;
}[keyof T];

export interface AsyncModalDestroyOptions {
  /**
   * 状态持久化的key，若不传，则关闭销毁所有持久化的弹窗。
   */
  persistent?: string ,
  /**
   * 可见性筛选，若不传，则默认筛选所有弹窗。
   */
  visibility?: 'visible' | 'hidden',
}

export interface AsyncModalRender {
  <D extends AsyncModalProps>(Comp: React.ComponentType<D>, props?: ComputeAsyncModalProps<D>, options?: AsyncModalRenderOptions<D>): Promise<
    D['onOk'] extends (v: infer R) => void ? R : never
  >;
}

export interface AsyncModalRenderFactory {
  <D extends AsyncModalProps>(Comp: React.ComponentType<D>, props?: ComputeAsyncModalProps<D>, options?: AsyncModalRenderOptions<D>): () => Promise<
    D['onOk'] extends (v: infer R) => void ? R : never
  >;
}

export interface UseAsyncModalRenderReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
  destroy: (options: AsyncModalDestroyOptions) => void;
}

export interface AsyncModalContext extends Omit<UseAsyncModalRenderReturn, 'holder'> {
}
