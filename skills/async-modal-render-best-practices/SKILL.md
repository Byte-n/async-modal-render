---
name: async-modal-render-best-practices
description: "async-modal-render 库使用指南。TRIGGER when: code imports 'async-modal-render'; code uses useAsyncModalRenderContext, useAsyncModalRender, asyncModalRender, renderQuiet, renderPersistent, renderFactory, withAsyncModalPropsMapper; user asks to call/open/invoke a modal or dialog component asynchronously; user asks about render vs renderQuiet vs renderPersistent. SKIP: creating modal component internals (use async-modal-component-guide instead)."
---

# async-modal-render 使用指南

以 Promise 方式调用弹窗组件，`onOk` resolve、`onCancel` reject。

## 决策流程

### 第一步：选择模式

优先级：Context > Hook > Static

| 模式      | 条件                                 | 导入                                              |
|---------|------------------------------------|-------------------------------------------------|
| Context | 应用已有 `AsyncModalRenderProvider` 包裹 | `useAsyncModalRenderContext()`                  |
| Hook    | 无 Provider 但在 React 组件内            | `useAsyncModalRender()`，**必须将 `holder` 放入 JSX** |
| Static  | 非 React 上下文（工具函数、事件等）              | `asyncModalRender()`                            |

### 第二步：适配组件 props

检查弹窗组件是否有 `onOk` / `onCancel` props：

- **符合** `AsyncModalProps`（有 `onOk`/`onCancel`）→ 直接使用
- **不符合** → 在模块顶层用 `withAsyncModalPropsMapper` 适配：

```ts
import { withAsyncModalPropsMapper } from 'async-modal-render';

// 将 onConfirm -> onOk, onClose -> onCancel
const AdaptedModal = withAsyncModalPropsMapper(OriginalModal, ['onConfirm', 'onClose']);
```

### 第三步：选择渲染方法（CRITICAL — 必须严格按以下步骤逐步判断，禁止跳过）

**判断步骤：**

1. **判断是否需要返回结果**：调用方是否会使用 `onOk` 传回的值（赋值、打印、传参、展示等任何形式的消费）？
   - 是 → 标记为 `需要结果=true`，进入步骤 2
   - 否（仅触发动作，不关心返回值）→ 标记为 `需要结果=false`，进入步骤 2
2. **判断是否需要持久化**：是否满足以下任一条件？
   - 表单弹窗：关闭后再次打开需保留已填写/已选择的数据
   - 嵌套弹窗：弹窗关闭后其内部可能还会弹出其他弹窗
   - 频繁开关：同一弹窗反复打开/关闭，需保留内部状态
   - 是 → 标记为 `持久化=true`
   - 否 → 标记为 `持久化=false`
3. **根据标记选择方法**（唯一对应，无例外）：

| 需要结果 | 持久化 | 方法               |
|------|-----|------------------|
| true | true | `renderPersistent` |
| true | false | `render`          |
| false | true | `renderQuiet` + `persistent`/`openField` 选项 |
| false | false | `renderQuiet`     |

**禁止：** 不得以"代码更简洁"、"不需要处理取消"、"try-catch 多余"等理由偏离上述判定结果。方法选择只由步骤 1-3 的判定决定。

使用 Context / Hook 模式时有对应的函数：`render`、`renderQuiet`、`renderPersistent`、`renderFactory`、`renderQuietFactory`、
`renderPersistentFactory`

## 渲染函数区别

Context 模式额外支持 `destroyStrategy` 选项：

- `'hook'`：弹窗随调用组件卸载而销毁
- `'context'`：弹窗不随组件卸载，需手动管理
- 不传：不自动销毁

Hook 模式 API 与 Context 模式相同，但无 `destroyStrategy` 选项。

Static 模式仅支持 render / renderQuiet，对应方式的映射为：

- render: `asyncModalRender(Comp, props?, container?)`
- renderQuiet: `asyncModalRender(Comp, props?, container?, { quiet: boolean })`

**必须将 `holder` 放入 JSX**：

```tsx
const { render, holder } = useAsyncModalRender();
return <div>{holder}</div>;
```

### render

- 取消时会 reject 抛出 `AsyncModalRenderCancelError` 异常

```ts
const { render } = useAsyncModalRenderContext();
const result = await render(Comp, props ?, options ?);
```

### renderQuiet

- 取消时 resolve `undefined` 而非 reject。

```ts
const { renderQuiet } = useAsyncModalRenderContext();
const result = await renderQuiet(Comp, props, options);
// result 为 undefined 表示用户取消
```

### renderPersistent

- 取消时会 reject 抛出 `AsyncModalRenderCancelError` 异常
- 强制要求 `persistent` (唯一 key，标识持久化实例) + `openField`（如 `'open'`、`'visible'`），弹窗关闭后不卸载，通过 openField
  控制显隐。

```ts
const { renderPersistent } = useAsyncModalRenderContext();
await renderPersistent(Comp, props, {
  persistent: 'unique-key',
  openField: 'open', // 组件中控制显隐的 boolean prop
});
```

销毁持久化弹窗使用 `destroy()`：

```ts
const { destroy } = useAsyncModalRenderContext();
destroy({ persistent: 'editor' });       // 销毁指定弹窗
destroy({ visibility: 'hidden' });       // 销毁所有隐藏的
destroy({});                             // 销毁所有持久化弹窗
```

### renderFactory / renderQuietFactory / renderPersistentFactory

返回可重复调用的工厂函数，每次调用创建新弹窗实例。

```ts
const factory = renderFactory(Comp, props, options);
const result = await factory(); // 每次调用打开一个新弹窗
factory.destroyModal(); // 销毁该工厂产生的所有实例
```

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

## 适配已有弹窗 / 调用不符合 AsyncModalProps 类型的弹窗 / withAsyncModalPropsMapper

将非标准 props 的组件适配为符合 `AsyncModalProps` 的组件。内部有缓存，相同组件+相同映射返回同一引用。

```ts
// 签名
withAsyncModalPropsMapper(Comp, [onOkKey, onCancelKey])

// 示例：onSubmit -> onOk, onClose -> onCancel
const Adapted = withAsyncModalPropsMapper(MyModal, ['onSubmit', 'onClose']);
```

在模块顶层调用，确保组件引用稳定（persistent 模式要求同一 key 对应同一组件引用）。

## 错误类型

- `AsyncModalRenderCancelError`：用户取消时抛出（非 quiet 模式）
- `PersistentComponentConflictError`：同一 persistent key 对应不同组件引用时抛出

## 最佳实践（CRITICAL）

- `withAsyncModalPropsMapper` 在模块顶层调用，不要在组件内部调用（persistent 模式要求引用稳定）
- 同一 `persistent` key 必须对应同一组件引用，否则抛出 `PersistentComponentConflictError`
- 非 quiet 模式下用户取消会抛出 `AsyncModalRenderCancelError`，若业务上需要在用户取消时执行特定操作（如回滚状态、提示用户等），则需要 try {} catch 处理该异常
- Hook 模式的 `holder` 必须渲染到 JSX 中，否则弹窗不会显示
- Context 模式支持 `destroyStrategy` 选项：`'hook'` 弹窗随调用组件卸载而销毁，`'context'` 不随组件卸载需手动管理；不传则不自动销毁
