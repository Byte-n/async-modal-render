# 快速开始

`async-modal-render-native` 通过 Promise 调用 React Native 弹窗组件。RN 版本没有静态 DOM 挂载能力，请使用 Context 或 Hook。

## 安装

```bash
npm install async-modal-render-native
```

## 基本使用

优先在应用根部放置 `AsyncModalRenderProvider`：

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

弹窗组件接收 `onOk` 和 `onCancel`：

```tsx
import { Pressable, Text, View } from 'react-native';
import { AsyncModalProps } from 'async-modal-render-native';

interface ConfirmModalProps extends AsyncModalProps {
  message: string;
  onOk?: (value: 'confirmed') => void;
}

function ConfirmModal({ message, onOk, onCancel }: ConfirmModalProps) {
  return (
    <View>
      <Text>{message}</Text>
      <Pressable onPress={() => onOk?.('confirmed')}>
        <Text>确认</Text>
      </Pressable>
      <Pressable onPress={() => onCancel?.()}>
        <Text>取消</Text>
      </Pressable>
    </View>
  );
}
```

在子组件中调用：

```tsx
import { useAsyncModalRenderContext } from 'async-modal-render-native';

function Screen() {
  const { render } = useAsyncModalRenderContext();

  const submit = async () => {
    const result = await render(ConfirmModal, { message: '确认提交？' });
    console.log(result);
  };
}
```

## Hook 模式

没有 Provider 时使用 `useAsyncModalRender()`，并把 `holder` 放入 JSX：

```tsx
const { render, holder } = useAsyncModalRender();

return (
  <View>
    <Pressable onPress={() => render(ConfirmModal, { message: '继续？' })}>
      <Text>打开</Text>
    </Pressable>
    {holder}
  </View>
);
```

## 常用方法

- `render`：确认时 resolve，取消时 reject `AsyncModalRenderCancelError`
- `renderQuiet`：取消时 resolve `undefined`
- `renderPersistent`：关闭后保留组件实例，必须传 `persistent` 和 `openField`
- `renderFactory` / `renderQuietFactory` / `renderPersistentFactory`：创建可重复调用的渲染函数
- `destroy`：销毁持久化弹窗
- `withAsyncModalPropsMapper`：适配已有组件的回调 prop 名

## 注意事项

1. 弹窗组件需要调用 `onOk` 或 `onCancel`，否则 Promise 不会结束。
2. Hook 模式必须渲染 `{holder}`。
3. Context 模式必须在 `AsyncModalRenderProvider` 内部调用。
4. 持久化模式中，同一 `persistent` key 必须对应同一个组件引用。
5. RN 版本只从 `async-modal-render-native` 导入，不使用 `asyncModalRender()`。
