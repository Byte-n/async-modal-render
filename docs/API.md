# API

### asyncModalRender

直接将组件渲染到指定容器元素下。
这是一个独立的工具函数，不需要依赖 Context 或 Hook。

```typescript
function asyncModalRender<D extends AsyncModalProps, Quiet extends boolean>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D>,
  container?: Element,
  options?: { quiet: Quiet }
): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| Comp | `React.ComponentType<D>` | - | 需要渲染的组件 |
| props | `ComputeAsyncModalProps<D>` | - | 组件的属性（不包含 onOk 和 onCancel，或使其可选） |
| container | `Element` | `document.body` | 挂载的容器元素。如果不传，则会创建一个 div 挂载到 body 下，并在关闭后移除。 |
| options | `{ quiet: boolean }` | - | 配置项，支持 quiet 模式 |

**返回值：**

返回一个 Promise。
- 若 `quiet` 为 `false`（默认），onOk 时 resolve，onCancel 时 reject `AsyncModalRenderCancelError`。
- 若 `quiet` 为 `true`，onOk 时 resolve，onCancel 时 resolve `undefined`。

---

### useAsyncModalRender

在组件内使用的 Hook，返回弹窗渲染相关的方法和元素。

```typescript
function useAsyncModalRender(): UseAsyncModalRenderReturn
```

**返回值 `UseAsyncModalRenderReturn`：**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| render | `AsyncModalRender` | 渲染函数，用于渲染弹窗组件 |
| renderQuiet | `AsyncModalRenderQuiet` | 安静模式渲染函数，取消时不抛出错误 |
| renderPersistent | `AsyncModalRenderPersistent` | 持久化渲染函数，必须提供 persistent 和 openField |
| holder | `React.ReactElement` | 弹窗容器元素，需要放置在组件的 JSX 中 |
| renderFactory | `AsyncModalRenderFactory` | 渲染工厂函数，用于创建预配置的 render 函数 |
| renderQuietFactory | `AsyncModalRenderQuietFactory` | 安静模式渲染工厂函数 |
| renderPersistentFactory | `AsyncModalRenderPersistentFactory` | 持久化渲染工厂函数 |
| destroy | `AsyncModalDestroy` | 销毁持久化弹窗的函数 |

---

### AsyncModalRender

核心渲染函数，用于渲染弹窗并返回一个 Promise。

```typescript
interface AsyncModalRender {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}
```

**参数：**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| Comp | `React.ComponentType<D>` | 需要渲染的组件 |
| props | `ComputeAsyncModalProps<D>` | 组件的属性 |
| options | `AsyncModalRenderOptions<D, Quiet>` | 渲染配置项（用于持久化、Quiet 模式等） |

**返回值：**

返回一个 Promise，Promise 对象上附加了 `destroyModal` 方法，可用于手动销毁弹窗。

---

### AsyncModalRenderOptions

渲染配置项。

```typescript
type AsyncModalRenderOptions<D, Quiet extends boolean> = {
  /**
   * 状态持久化的key，若不传，则关闭时直接销毁弹窗。
   */
  persistent?: string;
  /**
   * 控制弹窗展示隐藏的prop key
   */
  openField?: ExtractBooleanKeys<D>;
  /**
   * 是否开启安静模式。开启后，取消弹窗不会抛出 AsyncModalRenderCancelError，而是 resolve undefined。
   */
  quiet?: Quiet;
}
```

---

### AsyncModalRenderPersistent

持久化渲染函数，强制要求提供 `persistent` 和 `openField` 参数。

```typescript
interface AsyncModalRenderPersistent {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>
      & Required<Pick<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}
```

---

### AsyncModalRenderQuiet

安静模式渲染函数，默认 `quiet` 为 `true`。

```typescript
interface AsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<true, R> : never> & { destroyModal: VoidFunction };
}
```

---

### AsyncModalRenderFactory

渲染工厂函数，用于预配置组件、属性及配置项，并返回一个可执行的渲染函数。

```typescript
interface AsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): RenderFactory<D, Quiet>;
}
```

**RenderFactory 返回值：**

```typescript
type RenderFactory <D extends AsyncModalProps, Quiet extends boolean> =
  (() => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & {
    destroyModal: VoidFunction;
  }) & {
    destroyModal: VoidFunction;
  };
```

工厂函数返回的函数本身也包含 `destroyModal` 方法，用于销毁该工厂产生的所有弹窗（如果适用）。

---

### AsyncModalDestroyOptions

销毁持久化弹窗的配置项。

```typescript
interface AsyncModalDestroyOptions {
  /**
   * 状态持久化的key，若不传，则关闭销毁所有持久化的弹窗。
   */
  persistent?: string;
  /**
   * 可见性筛选，若不传，则默认筛选所有弹窗。
   */
  visibility?: 'visible' | 'hidden';
}
```

---

### AsyncModalRenderProvider

提供 `asyncModalRender` 上下文的 Provider 组件。

```typescript
function AsyncModalRenderProvider({ children }: { children: React.ReactNode }): React.ReactElement
```

---

### useAsyncModalRenderContext

获取 `AsyncModalContext` 上下文的 Hook，必须在 `AsyncModalRenderProvider` 内部使用。

```typescript
function useAsyncModalRenderContext(): AsyncModalContext
```

**返回值 `AsyncModalContext`：**

包含 `render`, `renderQuiet`, `renderPersistent`, `renderFactory`, `renderQuietFactory`, `renderPersistentFactory`, `destroy` 方法。
不包含 `holder`。

Context 中的 `render` 方法支持 `options.destroyStrategy`：

```typescript
type ContextAsyncModalRenderOptions<D, Quiet extends boolean> = AsyncModalRenderOptions<D, Quiet> & {
  destroyStrategy?: 'hook' | 'context';
};
```

---

### AsyncModalProps

弹窗组件需要继承的基础属性接口。
所有通过 async-modal-render 调用的组件都应该符合此接口（或通过 mapper 适配）。

```typescript
interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
```

---

### ComputeAsyncModalProps

计算后的组件属性类型，使 `onOk` 和 `onCancel` 变为可选。

```typescript
export type ComputeAsyncModalProps<D extends AsyncModalProps> =
  & Pick<D, Exclude<keyof D, 'onOk' |'onCancel'>>
  & Partial<Pick<D, 'onOk' | 'onCancel'>>
```

---

### AsyncModalRenderCancelError

用户取消操作时抛出的错误类（仅在非 quiet 模式下抛出）。

```typescript
class AsyncModalRenderCancelError extends Error {
  constructor();
}
```

---

### PersistentComponentConflictError

当尝试使用相同的 persistent key 渲染不同组件时抛出的错误。

```typescript
export class PersistentComponentConflictError extends Error {
  constructor(key: string);
}
```

---

### withAsyncModalPropsMapper

属性映射高阶组件，用于适配具有不同 `onOk`/`onCancel` 命名规范的组件。

此 HOC 内部实现了缓存机制：对于同一个组件和相同的映射 key，会返回同一个包装组件引用，这有助于避免不必要的 React 渲染更新。

```typescript
function withAsyncModalPropsMapper<
  A extends object,
  OnOk extends keyof A,
  OnCancel extends keyof A
>(
  Comp: ComponentType<A>,
  keys: [OnOk, OnCancel],
): ComponentType<
  Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }
>
```
