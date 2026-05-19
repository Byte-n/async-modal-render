# API

React Native 版本不提供静态 `asyncModalRender()`。所有弹窗都通过 `AsyncModalRenderProvider` / `useAsyncModalRenderContext()` 或 `useAsyncModalRender()` 的 `holder` 渲染。

## useAsyncModalRender

```ts
function useAsyncModalRender(): UseAsyncModalRenderReturn
```

返回值：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| render | `AsyncModalRender` | 渲染弹窗并返回 Promise |
| renderQuiet | `AsyncModalRenderQuiet` | 取消时 resolve `undefined` |
| renderPersistent | `AsyncModalRenderPersistent` | 持久化渲染，必须提供 `persistent` 和 `openField` |
| holder | `React.ReactElement` | 弹窗挂载元素，必须放入 JSX |
| renderFactory | `AsyncModalRenderFactory` | 创建可重复调用的 render 函数 |
| renderQuietFactory | `AsyncModalRenderQuietFactory` | 创建 quiet render 函数 |
| renderPersistentFactory | `AsyncModalRenderPersistentFactory` | 创建 persistent render 函数 |
| destroy | `AsyncModalDestroy` | 销毁持久化弹窗 |

## AsyncModalRender

```ts
interface AsyncModalRender {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & {
    destroyModal: VoidFunction;
  };
}
```

`onOk` resolve Promise，`onCancel` reject `AsyncModalRenderCancelError`。

## renderQuiet

```ts
interface AsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? R | undefined : never> & {
    destroyModal: VoidFunction;
  };
}
```

`renderQuiet` 取消时不会 reject，而是 resolve `undefined`。

## renderPersistent

```ts
interface AsyncModalRenderPersistent {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'> &
      Required<Pick<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & {
    destroyModal: VoidFunction;
  };
}
```

持久化弹窗关闭后不会卸载，而是用 `openField` 对应的 boolean prop 控制隐藏。再次用相同 `persistent` key 打开时会复用组件实例。

## AsyncModalRenderOptions

```ts
type AsyncModalRenderOptions<D, Quiet extends boolean> = {
  persistent?: string;
  openField?: ExtractBooleanKeys<D>;
  quiet?: Quiet;
};
```

## destroy

```ts
interface AsyncModalDestroyOptions {
  persistent?: string;
  visibility?: 'visible' | 'hidden';
}
```

`destroy({ persistent: 'editor' })` 销毁指定持久化弹窗。`destroy({})` 销毁所有持久化弹窗。

## Context

```ts
function AsyncModalRenderProvider({ children }: { children: React.ReactNode }): React.ReactElement
function useAsyncModalRenderContext(): AsyncModalContext
```

Context 返回 `render`、`renderQuiet`、`renderPersistent`、`renderFactory`、`renderQuietFactory`、`renderPersistentFactory`、`destroy`，不返回 `holder`。

Context 模式额外支持 `destroyStrategy`：

```ts
type ContextAsyncModalRenderOptions<D, Quiet extends boolean> = AsyncModalRenderOptions<D, Quiet> & {
  destroyStrategy?: 'hook' | 'context';
};
```

## AsyncModalProps

```ts
interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
```

## withAsyncModalPropsMapper

```ts
withAsyncModalPropsMapper(Comp, [onOkKey, onCancelKey])
```

将已有组件的非标准回调名适配为 `onOk` / `onCancel`。
