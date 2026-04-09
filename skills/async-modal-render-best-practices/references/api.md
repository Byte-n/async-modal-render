# async-modal-render API 参考

## 目录

- [AsyncModalProps 接口](#asyncmodalprops)
- [withAsyncModalPropsMapper](#withasyncmodalpropsmapper)
- [Context 模式 API](#context-模式)
- [Hook 模式 API](#hook-模式)
- [Static 模式 API](#static-模式)
- [destroy 销毁](#destroy)
- [错误类型](#错误类型)

## AsyncModalProps

弹窗组件的标准接口。`onOk` resolve Promise，`onCancel` reject Promise（quiet 模式下 resolve undefined）。

```ts
interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
```

组件 props 不符合此接口时，使用 `withAsyncModalPropsMapper` 适配。

传入 props 时，`onOk` 和 `onCancel` 自动变为可选（由 `ComputeAsyncModalProps<D>` 类型处理），只需传业务 props。

## withAsyncModalPropsMapper

将非标准 props 的组件适配为符合 `AsyncModalProps` 的组件。内部有缓存，相同组件+相同映射返回同一引用。

```ts
// 签名
withAsyncModalPropsMapper(Comp, [onOkKey, onCancelKey])

// 示例：onSubmit -> onOk, onClose -> onCancel
const Adapted = withAsyncModalPropsMapper(MyModal, ['onSubmit', 'onClose']);
```

在模块顶层调用，确保组件引用稳定（persistent 模式要求同一 key 对应同一组件引用）。

## Context 模式

需要 `AsyncModalRenderProvider` 包裹应用根节点，子组件通过 `useAsyncModalRenderContext()` 获取方法。

Context 模式额外支持 `destroyStrategy` 选项：
- `'hook'`：弹窗随调用组件卸载而销毁
- `'context'`：弹窗不随组件卸载，需手动管理
- 不传：不自动销毁

### render

```ts
const { render } = useAsyncModalRenderContext();
const result = await render(Comp, props?, options?);
```

### renderQuiet

取消时 resolve `undefined` 而非 reject。

```ts
const { renderQuiet } = useAsyncModalRenderContext();
const result = await renderQuiet(Comp, props?, options?);
// result 为 undefined 表示用户取消
```

### renderPersistent

强制要求 `persistent` + `openField`，弹窗关闭后不卸载，通过 openField 控制显隐。

```ts
const { renderPersistent } = useAsyncModalRenderContext();
await renderPersistent(Comp, props, {
  persistent: 'unique-key',
  openField: 'open', // 组件中控制显隐的 boolean prop
});
```

### renderFactory / renderQuietFactory / renderPersistentFactory

返回可重复调用的工厂函数，每次调用创建新弹窗实例。

```ts
const factory = renderFactory(Comp, props, options);
const result = await factory(); // 每次调用打开一个新弹窗
factory.destroyModal(); // 销毁该工厂产生的所有实例
```

## Hook 模式

`useAsyncModalRender()` 返回 `render`、`renderQuiet`、`renderPersistent`、`renderFactory`、`renderQuietFactory`、`renderPersistentFactory`、`destroy` 和 `holder`。

**必须将 `holder` 放入 JSX**：

```tsx
const { render, holder } = useAsyncModalRender();
return <div>{holder}</div>;
```

API 与 Context 模式相同，但无 `destroyStrategy` 选项。

## Static 模式

`asyncModalRender` 独立函数，不依赖 React 树。自动创建 DOM 容器挂载到 body。

```ts
import { asyncModalRender } from 'async-modal-render';
const result = await asyncModalRender(Comp, props?, container?, { quiet: boolean });
```

- 不支持 persistent
- 不支持 factory
- 适用于非 React 上下文（事件处理、工具函数等）

## destroy

销毁持久化弹窗。仅 Context 和 Hook 模式可用。

```ts
const { destroy } = useAsyncModalRenderContext();

destroy({ persistent: 'key' });           // 销毁指定 key
destroy({ visibility: 'hidden' });        // 销毁所有隐藏的持久化弹窗
destroy({ persistent: 'key', visibility: 'visible' }); // 组合筛选
destroy({});                              // 销毁所有持久化弹窗
```

## 错误类型

- `AsyncModalRenderCancelError`：用户取消时抛出（非 quiet 模式）
- `PersistentComponentConflictError`：同一 persistent key 对应不同组件引用时抛出