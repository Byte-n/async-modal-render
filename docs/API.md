# API

### asyncModalRender

直接将组件渲染到指定容器元素下。

```typescript
function asyncModalRender<D extends AsyncModalProps>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D>,
  container?: Element,
): Promise<D['onOk'] extends (v: infer R) => void ? R : never>
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| Comp | `React.ComponentType<D>` | - | 需要渲染的组件 |
| props | `ComputeAsyncModalProps<D>` | - | 组件的属性（不包含 onOk 和 onCancel，或使其可选） |
| container | `Element` | `document.body` | 挂载的容器元素。如果不传，则会创建一个 div 挂载到 body 下，并在关闭后移除。 |

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
| holder | `React.ReactElement` | 弹窗容器元素，需要放置在组件的 JSX 中 |
| renderFactory | `AsyncModalRenderFactory` | 渲染工厂函数，用于创建预配置的 render 函数 |
| destroy | `(options: AsyncModalDestroyOptions) => void` | 销毁持久化弹窗的函数 |

---

### AsyncModalRender

核心渲染函数，用于渲染弹窗并返回一个 Promise。

```typescript
interface AsyncModalRender {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>, 
    props?: ComputeAsyncModalProps<D>, 
    options?: AsyncModalRenderOptions<D>
  ): Promise<D['onOk'] extends (v: infer R) => void ? R : never>;
}
```

**参数：**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| Comp | `React.ComponentType<D>` | 需要渲染的组件 |
| props | `ComputeAsyncModalProps<D>` | 组件的属性 |
| options | `AsyncModalRenderOptions<D>` | 渲染配置项（用于持久化等） |

---

### AsyncModalRenderFactory

渲染工厂函数，用于预配置组件、属性及配置项，并返回一个可执行的渲染函数。

```typescript
interface AsyncModalRenderFactory {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>, 
    props?: ComputeAsyncModalProps<D>, 
    options?: AsyncModalRenderOptions<D>
  ): () => Promise<D['onOk'] extends (v: infer R) => void ? R : never>;
}
```

---

### AsyncModalRenderOptions

渲染配置项。

```typescript
type AsyncModalRenderOptions<D> = {
  /**
   * 状态持久化的key，若不传，则关闭时直接销毁弹窗。
   */
  persistent: string;
  /**
   * 控制弹窗展示隐藏的prop key
   */
  openField: ExtractBooleanKeys<D>;
}
```

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

包含 `render`, `renderFactory`, `destroy` 方法，不包含 `holder`。

---

### AsyncModalProps

弹窗组件需要继承的基础属性接口。

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
type ComputeAsyncModalProps<D extends AsyncModalProps> = 
  Pick<D, Exclude<keyof D, keyof AsyncModalProps>> & 
  Partial<Pick<D, keyof AsyncModalProps>>;
```

---

### AsyncModalRenderCancelError

用户取消操作时抛出的错误类。

```typescript
class AsyncModalRenderCancelError extends Error {
  constructor();
}
```

当用户点击取消且 `onCancel` 被调用时（没有传入 error），Promise 会 reject 一个 `AsyncModalRenderCancelError` 实例。

---

### withAsyncModalPropsMapper

属性映射高阶组件，用于适配具有不同 `onOk`/`onCancel` 命名规范的组件。

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
