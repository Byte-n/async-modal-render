import React from 'react'

/**
 * 弹窗组件的基础属性接口
 * 所有通过 async-modal-render 调用的组件都应该符合此接口（或通过 mapper 适配）
 */
export interface AsyncModalProps {
  /**
   * 点击确定/成功时的回调
   * 调用此函数会 resolve Promise
   * @param args 传递给 Promise resolve 的数据
   */
  onOk?: (...args: any[]) => void;
  /**
   * 点击取消/关闭时的回调
   * 调用此函数会 reject Promise (除非开启了 quiet 模式)
   * @param error 传递给 Promise reject 的错误对象（可选）
   */
  onCancel?: (error?: any) => void;
}

/**
 * 计算组件的 Props 类型
 * 将 onOk 和 onCancel 设为可选，保留其他属性
 */
export type ComputeAsyncModalProps<D extends AsyncModalProps> =
  & Pick<D, Exclude<keyof D, 'onOk' |'onCancel'>>
  & Partial<Pick<D, 'onOk' | 'onCancel'>>

/**
 * 渲染选项配置
 */
export type AsyncModalRenderOptions<D, Quiet extends boolean> = {
  /**
   * 状态持久化的 key
   * 若传入此 key，弹窗关闭后不会销毁，而是隐藏，下次使用相同 key 打开时会恢复状态
   * 若不传，则关闭时直接销毁弹窗
   */
  persistent?: string;
  /**
   * 控制弹窗展示/隐藏的 prop key
   * 必须是组件 props 中类型为 boolean 的字段名
   * 配合 persistent 使用，用于控制持久化弹窗的显隐
   */
  openField?: ExtractBooleanKeys<D>;
  /**
   * 是否开启静默模式
   * 若为 true，点击取消时不会抛出 AsyncModalRenderCancelError，而是 resolve undefined
   * 默认为 false
   */
  quiet?: Quiet;
}

type ExtractBooleanKeys<T> = {
  [K in keyof T]: Required<T>[K] extends boolean ? K : never;
}[keyof T];

/**
 * 销毁持久化弹窗的选项
 */
export interface AsyncModalDestroyOptions {
  /**
   * 要销毁的持久化弹窗的 key
   * 若不传，则根据 visibility 筛选或销毁所有
   */
  persistent?: string;
  /**
   * 可见性筛选
   * visible: 仅销毁当前可见的弹窗
   * hidden: 仅销毁当前隐藏的弹窗
   * 若不传，则不筛选可见性
   */
  visibility?: 'visible' | 'hidden';
}

/**
 * 核心渲染函数接口
 * 用于直接渲染弹窗并返回 Promise
 */
export interface AsyncModalRender {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}

/**
 * 持久化渲染函数接口
 * 强制要求传入 persistent 和 openField
 */
export interface AsyncModalRenderPersistent {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>
      & Required<Pick<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}

/**
 * 持久化渲染工厂函数接口
 * 返回一个预配置了持久化参数的渲染函数
 */
export interface AsyncModalRenderPersistentFactory {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'> &
      Required<Pick<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): RenderFactory<D, Quiet>
}

/**
 * 静默模式渲染函数接口
 * 默认开启 quiet: true
 */
export interface AsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<true, R> : never> & { destroyModal: VoidFunction };
}

/**
 * 静默模式渲染工厂函数接口
 */
export interface AsyncModalRenderQuietFactory {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): RenderFactory<D, true>
}


// const fun: AsyncModalRender = null as any as AsyncModalRender;
// fun(null as any as ComponentType<AsyncModalProps & {OPEN?:boolean}>, {onCancel: (_)=> {}}, { persistent:'s', quiet:true, openField: 'OPEN'  })

/**
 * 渲染工厂生成的函数类型
 * 执行该函数会触发弹窗渲染
 */
export type RenderFactory <D extends AsyncModalProps, Quiet extends boolean> =
  (() => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & {
    destroyModal: VoidFunction;
  }) & {
    /**
     * 销毁该工厂产生的所有弹窗实例（主要用于清理）
     */
    destroyModal: VoidFunction;
  };

/**
 * 通用渲染工厂函数接口
 */
export interface AsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): RenderFactory<D, Quiet>;
}

/**
 * 销毁函数接口
 */
export interface AsyncModalDestroy {
  (options: AsyncModalDestroyOptions): void;
}

/**
 * useAsyncModalRender Hook 的返回值
 */
export interface UseAsyncModalRenderReturn {
  /** 标准渲染函数 */
  render: AsyncModalRender;
  /** 挂载节点，需要放置在组件树中 */
  holder: React.ReactElement;
  /** 渲染工厂函数 */
  renderFactory: AsyncModalRenderFactory;
  /** 销毁函数 */
  destroy: AsyncModalDestroy;
  /** 静默渲染函数 */
  renderQuiet: AsyncModalRenderQuiet;
  /** 持久化渲染函数 */
  renderPersistent: AsyncModalRenderPersistent;
  /** 静默渲染工厂函数 */
  renderQuietFactory: AsyncModalRenderQuietFactory;
  /** 持久化渲染工厂函数 */
  renderPersistentFactory: AsyncModalRenderPersistentFactory;
}

/**
 * Context 模式下的渲染选项
 * 增加了 destroyStrategy 选项
 */
export type ContextAsyncModalRenderOptions<D, Quiet extends boolean> = AsyncModalRenderOptions<D, Quiet> & {
  /**
   * 销毁策略
   * hook: 跟随调用 hook 的组件销毁而销毁（默认）
   * context: 不随组件销毁，需要手动管理
   */
  destroyStrategy?: 'hook' | 'context';
};

/**
 * Context 模式下的渲染函数接口
 */
export interface ContextAsyncModalRender {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: ContextAsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>;
}

/**
 * Context 模式下的渲染工厂函数接口
 */
export interface ContextAsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: ContextAsyncModalRenderOptions<D, Quiet>,
  ): () => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>;
}


export interface ContextAsyncModalRenderPersistent {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<ContextAsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'> &
      Required<Pick<ContextAsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}

export interface ContextAsyncModalRenderPersistentFactory {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<ContextAsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'> &
      Required<Pick<ContextAsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): RenderFactory<D, Quiet>;
}

export interface ContextAsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<ContextAsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<true, R> : never> & { destroyModal: VoidFunction };
}

export interface ContextAsyncModalRenderQuietFactory {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<ContextAsyncModalRenderOptions<D, true>, 'quiet'>,
  ): RenderFactory<D, true>;
}

/**
 * 计算 Quiet 模式下的返回值类型
 * 若 Quiet 为 true，则返回类型包含 undefined (取消时)
 */
type ComputeQuiet <Quiet extends boolean, R> = Quiet extends true ? (R | undefined) : R

/**
 * Context 提供的接口
 */
export interface AsyncModalContext {
  render: ContextAsyncModalRender;
  renderFactory: ContextAsyncModalRenderFactory;
  destroy: AsyncModalDestroy;
  renderQuiet: ContextAsyncModalRenderQuiet;
  renderPersistent: ContextAsyncModalRenderPersistent;
  renderQuietFactory: ContextAsyncModalRenderQuietFactory;
  renderPersistentFactory: ContextAsyncModalRenderPersistentFactory;
}
