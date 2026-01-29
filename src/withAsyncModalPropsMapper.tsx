import React, { ComponentType } from 'react';

/**
 * 用于在组件上存储生成的 Mapper 组件的缓存 Key
 * 使用 Symbol 防止属性冲突，确保缓存的私有性
 */
const KEY = Symbol('withAsyncModalPropsMapper');

/**
 * AsyncModalProps 属性映射高阶组件
 * 用于将不符合 AsyncModalProps 规范（onOk/onCancel）的组件适配为符合规范的组件
 *
 * 此 HOC 内部实现了缓存机制：
 * 对于同一个组件和相同的映射 key，会返回同一个包装组件引用，
 * 这有助于避免不必要的 React 渲染更新。
 *
 * @template A 原组件的 Props 类型
 * @template OnOk 原组件中对应 onOk 功能的属性名
 * @template OnCancel 原组件中对应 onCancel 功能的属性名
 * @param Comp 需要适配的 React 组件
 * @param keys 包含两个元素的数组，分别是 [onOkPropName, onCancelPropName]
 * @returns 返回一个新的组件，该组件接收标准 AsyncModalProps，并自动转发到原组件对应的属性上
 *
 * @example
 * // 假设 MyModal 接受 onConfirm 和 onClose
 * const MyAdaptedModal = withAsyncModalPropsMapper(MyModal, ['onConfirm', 'onClose']);
 * // 现在可以使用 render(MyAdaptedModal, ...)
 */
export function withAsyncModalPropsMapper<A extends object, OnOk extends keyof A, OnCancel extends keyof A>(
  Comp: ComponentType<A>,
  keys: [OnOk, OnCancel],
): ComponentType<Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }> {
  // 1. 初始化缓存容器
  if (!(Comp as any)[KEY]) {
    (Comp as any)[KEY] = {};
  }

  // 2. 生成缓存 Key (基于映射的属性名)
  const cacheKey = keys.join('-');

  // 3. 检查缓存
  if ((Comp as any)[KEY][cacheKey]) {
    return (Comp as any)[KEY][cacheKey] as ComponentType<
      Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }
    >;
  }

  // 4. 创建新的包装组件
  const Mapper: ComponentType<Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }> = (
    props,
  ) => {
    const { onOk, onCancel, ..._newProps } = props;
    const newProps = _newProps as A;
    const [onOkKey, onCancelKey] = keys;
    newProps[onOkKey] = onOk;
    newProps[onCancelKey] = onCancel;
    return <Comp {...newProps} />;
  };

  // 5. 写入缓存
  (Comp as any)[KEY][cacheKey] = Mapper;
  
  return Mapper;
}
