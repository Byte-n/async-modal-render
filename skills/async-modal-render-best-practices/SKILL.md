---
name: async-modal-render-best-practices
description: "async-modal-render 库使用指南。当用户需要以 Promise 方式调用弹窗组件、使用异步弹窗渲染、编写弹窗相关代码时触发。覆盖：(1) Context/Hook/Static 三种模式选择 (2) render/renderQuiet/renderPersistent 方法选择 (3) withAsyncModalPropsMapper 适配非标准弹窗 (4) 持久化弹窗与 destroy 管理"
---

# async-modal-render 使用指南

以 Promise 方式调用弹窗组件，`onOk` resolve、`onCancel` reject。

## 决策流程

### 第一步：选择模式

优先级：Context > Hook > Static

| 模式 | 条件 | 导入 |
|------|------|------|
| Context | 应用已有 `AsyncModalRenderProvider` 包裹 | `useAsyncModalRenderContext()` |
| Hook | 无 Provider 但在 React 组件内 | `useAsyncModalRender()`，**必须将 `holder` 放入 JSX** |
| Static | 非 React 上下文（工具函数、事件等） | `asyncModalRender()` |

### 第二步：适配组件 props

检查弹窗组件是否有 `onOk` / `onCancel` props：

- **符合** `AsyncModalProps`（有 `onOk`/`onCancel`）→ 直接使用
- **不符合** → 在模块顶层用 `withAsyncModalPropsMapper` 适配：

```ts
import { withAsyncModalPropsMapper } from 'async-modal-render';

// 将 onConfirm -> onOk, onClose -> onCancel
const AdaptedModal = withAsyncModalPropsMapper(OriginalModal, ['onConfirm', 'onClose']);
```

### 第三步：选择渲染方法

```
需要返回结果？
├─ 是 → 需要持久化？(*)
│       ├─ 是 → renderPersistent
│       └─ 否 → render
└─ 否 → 需要持久化？(*)
        ├─ 是 → renderQuiet + persistent/openField 选项
        └─ 否 → renderQuiet
```

(*) 以下场景需要持久化（保留 React 节点不卸载）：
- 表单弹窗：关闭后再次打开需保留已填写/已选择的数据
- 嵌套弹窗：弹窗关闭后其内部可能还会弹出其他弹窗
- 频繁开关：同一弹窗反复打开/关闭，需保留内部状态

## 使用模式示例

各模式（Context / Hook / Static）的完整代码示例见 [references/examples.md](references/examples.md)。

## 持久化弹窗

关键参数：
- `persistent`：唯一 key，标识持久化实例
- `openField`：组件中控制显隐的 boolean prop 名（如 `'open'`、`'visible'`）

弹窗组件必须支持通过该 boolean prop 控制显隐（`open=false` 时隐藏而非卸载）。

销毁持久化弹窗使用 `destroy()`：

```ts
const { destroy } = useAsyncModalRenderContext();
destroy({ persistent: 'editor' });       // 销毁指定弹窗
destroy({ visibility: 'hidden' });       // 销毁所有隐藏的
destroy({});                             // 销毁所有持久化弹窗
```

## 注意事项

- `withAsyncModalPropsMapper` 在模块顶层调用，不要在组件内部调用（persistent 模式要求引用稳定）
- 同一 `persistent` key 必须对应同一组件引用，否则抛出 `PersistentComponentConflictError`
- 非 quiet 模式下用户取消会抛出 `AsyncModalRenderCancelError`，需 try/catch
- Hook 模式的 `holder` 必须渲染到 JSX 中，否则弹窗不会显示
- Context 模式支持 `destroyStrategy` 选项：`'hook'` 弹窗随调用组件卸载而销毁，`'context'` 不随组件卸载需手动管理；不传则不自动销毁

## API 参考

详细 API 签名和类型定义见 [references/api.md](references/api.md)。