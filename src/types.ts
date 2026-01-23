import React from 'react';

export interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}

type KS = keyof AsyncModalProps;
export type ComputeAsyncModalProps<D extends AsyncModalProps> = Pick<D, Exclude<keyof D, KS>> & Partial<Pick<D, KS>>;

export interface AsyncModalRender {
  <D extends AsyncModalProps>(Comp: React.ComponentType<D>, props?: ComputeAsyncModalProps<D>): Promise<
    D['onOk'] extends (v: infer R) => void ? R : never
  >;
}

export interface AsyncModalRenderFactory {
  <D extends AsyncModalProps>(Comp: React.ComponentType<D>, props?: ComputeAsyncModalProps<D>): () => Promise<
    D['onOk'] extends (v: infer R) => void ? R : never
  >;
}

export interface UseAsyncModalRenderReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
}

export interface AsyncModalContext {
  render: AsyncModalRender;
  renderFactory: AsyncModalRenderFactory;
}
