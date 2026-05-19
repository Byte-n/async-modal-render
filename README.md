# async-modal-render-native

[![npm version](https://img.shields.io/npm/v/async-modal-render-native.svg)](https://www.npmjs.com/package/async-modal-render-native)
[![license](https://img.shields.io/npm/l/async-modal-render-native.svg)](https://github.com/Byte-n/async-modal-render-native/blob/main/LICENSE)

React Native 弹窗 Promise 化工具库。它保留 async-modal-render 的 Hook / Context 调用模型，让弹窗组件通过 `onOk` resolve、`onCancel` reject，并用 `async/await` 编排后续流程。

RN 版本不提供 Web 的静态 `asyncModalRender()` 挂载 API；请使用 `AsyncModalRenderProvider` 或 `useAsyncModalRender()` 的 `holder`。

## 安装

```bash
npm install async-modal-render-native
```

```bash
yarn add async-modal-render-native
```

```bash
pnpm add async-modal-render-native
```

## 基本使用

```tsx
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  AsyncModalProps,
  AsyncModalRenderProvider,
  useAsyncModalRenderContext,
} from 'async-modal-render-native';

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

function DeleteButton() {
  const { render } = useAsyncModalRenderContext();

  const handleDelete = async () => {
    const result = await render(ConfirmModal, {
      message: '确定要删除吗？',
    });

    if (result === 'confirmed') {
      await api.delete();
    }
  };

  return (
    <Pressable onPress={handleDelete}>
      <Text>删除</Text>
    </Pressable>
  );
}

export function App() {
  return (
    <AsyncModalRenderProvider>
      <DeleteButton />
    </AsyncModalRenderProvider>
  );
}
```

## Hook 模式

没有全局 Provider 时，可以在组件内使用 `useAsyncModalRender()`。必须把 `holder` 渲染到 JSX 中，否则弹窗不会显示。

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

## API

- `useAsyncModalRender()`
- `AsyncModalRenderProvider`
- `useAsyncModalRenderContext()`
- `render`
- `renderQuiet`
- `renderPersistent`
- `renderFactory`
- `renderQuietFactory`
- `renderPersistentFactory`
- `destroy`
- `withAsyncModalPropsMapper`
- `AsyncModalRenderCancelError`
- `PersistentComponentConflictError`

`renderQuiet` 在取消时 resolve `undefined`。`renderPersistent` 需要传入 `persistent` 和 `openField`，关闭后保留组件实例并通过 `openField` 控制显隐。
