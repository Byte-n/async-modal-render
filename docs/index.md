# async-modal-render-native

React Native 弹窗 Promise 化工具库。通过 `AsyncModalRenderProvider` / `useAsyncModalRenderContext()` 或 `useAsyncModalRender()` 调用弹窗组件。

RN 版本不提供 Web 静态 `asyncModalRender()` API。

```tsx
import { AsyncModalRenderProvider } from 'async-modal-render-native';

export function App() {
  return (
    <AsyncModalRenderProvider>
      <Screen />
    </AsyncModalRenderProvider>
  );
}
```
