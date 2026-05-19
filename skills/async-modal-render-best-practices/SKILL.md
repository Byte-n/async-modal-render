---
name: async-modal-render-best-practices
description: "async-modal-render-native 使用指南。TRIGGER when: code imports 'async-modal-render-native'; code uses useAsyncModalRenderContext, useAsyncModalRender, renderQuiet, renderPersistent, renderFactory, withAsyncModalPropsMapper; user asks to call/open/invoke a React Native modal or dialog asynchronously; user asks about render vs renderQuiet vs renderPersistent. SKIP: creating modal component internals (use async-modal-component-guide instead)."
---

# async-modal-render-native 使用指南

以 Promise 方式调用 React Native 弹窗组件：`onOk` resolve，`onCancel` reject。RN 版本没有静态 `asyncModalRender()`，只能使用 Context 或 Hook。

## 决策流程

### 1. 选择模式

优先级：Context > Hook。

| 模式 | 条件 | 导入 |
| --- | --- | --- |
| Context | 应用已有 `AsyncModalRenderProvider` 包裹 | `useAsyncModalRenderContext()` |
| Hook | 无 Provider 但在 React 组件内 | `useAsyncModalRender()`，必须渲染 `holder` |

### 2. 适配组件 props

- 组件已有 `onOk` / `onCancel`：直接使用。
- 回调名不一致：在模块顶层用 `withAsyncModalPropsMapper` 适配。

```ts
import { withAsyncModalPropsMapper } from 'async-modal-render-native';

const AdaptedModal = withAsyncModalPropsMapper(OriginalModal, ['onConfirm', 'onClose']);
```

### 3. 选择渲染方法

| 需要结果 | 需要持久化 | 方法 |
| --- | --- | --- |
| true | true | `renderPersistent` |
| true | false | `render` |
| false | true | `renderQuiet` + `persistent` / `openField` |
| false | false | `renderQuiet` |

持久化适用于关闭后需要保留输入、选择、内部步骤或嵌套弹窗状态的场景。

## 核心 API

Context 模式额外支持 `destroyStrategy`：

- `hook`：随调用组件卸载而销毁。
- `context`：不随调用组件卸载，跟随 Provider。
- 不传：不自动销毁。

Hook 模式需要把 `holder` 放进 JSX：

```tsx
const { render, holder } = useAsyncModalRender();
return <>{holder}</>;
```

### render

```ts
const { render } = useAsyncModalRenderContext();
const result = await render(Comp, props, options);
```

取消时 reject `AsyncModalRenderCancelError`。

### renderQuiet

```ts
const result = await renderQuiet(Comp, props, options);
if (result === undefined) return;
```

取消时 resolve `undefined`。

### renderPersistent

```ts
await renderPersistent(Comp, props, {
  persistent: 'unique-key',
  openField: 'open',
});
```

组件必须支持 `openField` 对应的 boolean prop，并在 false 时隐藏自身。

### destroy

```ts
destroy({ persistent: 'editor' });
destroy({ visibility: 'hidden' });
destroy({});
```

## 最佳实践

- 不要从 `async-modal-render-native` 导入或调用 `asyncModalRender`。
- 优先使用 Context，应用根部放置 `AsyncModalRenderProvider`。
- Hook 模式必须渲染 `holder`。
- `withAsyncModalPropsMapper` 放在模块顶层，保持组件引用稳定。
- 同一个 `persistent` key 必须始终对应同一个组件引用，否则会抛出 `PersistentComponentConflictError`。
