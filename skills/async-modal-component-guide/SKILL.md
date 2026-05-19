---
name: async-modal-component-guide
description: "定义符合 async-modal-render-native 规范的 React Native 弹窗组件最佳实践。当用户需要创建新的 RN 弹窗组件、编写弹窗组件代码、或将现有弹窗适配为 async-modal-render-native 可用的组件时触发。覆盖 AsyncModalProps、props 设计、withAsyncModalPropsMapper、持久化 open 控制。"
---

# 定义符合 async-modal-render-native 规范的弹窗组件

## 核心规范

弹窗组件需要接收 `onOk` 和 `onCancel` 回调：

```ts
import { AsyncModalProps } from 'async-modal-render-native';

interface MyModalProps extends AsyncModalProps {
  onOk?: (result: ResultType) => void;
  onCancel?: (error?: any) => void;
}
```

- `onOk` 的第一个参数类型决定 `render()` 的 Promise resolve 类型。
- `onCancel()` 触发取消；非 quiet 模式会 reject `AsyncModalRenderCancelError`。
- 需要持久化时，额外定义 boolean 显隐 prop，如 `open` 或 `visible`。

## React Native 示例

```tsx
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AsyncModalProps } from 'async-modal-render-native';

interface ConfirmModalProps extends AsyncModalProps {
  open?: boolean;
  message: string;
  onOk?: (value: 'confirmed') => void;
}

export function ConfirmModal({ open = true, message, onOk, onCancel }: ConfirmModalProps) {
  if (!open) return null;

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

## 不符合规范的组件

若组件回调不是 `onOk` / `onCancel`，在模块顶层用 `withAsyncModalPropsMapper` 适配：

```ts
import { withAsyncModalPropsMapper } from 'async-modal-render-native';

const AdaptedModal = withAsyncModalPropsMapper(ThirdPartyModal, ['onConfirm', 'onDismiss']);
```

## 设计要点

- 精确定义 `onOk` 参数类型。
- 仅展示信息的弹窗可让 `onOk` 无参数或参数为 `void`。
- 持久化弹窗必须通过 `open` / `visible` 等 boolean prop 控制显隐；`false` 时隐藏或返回 `null`。
- 弹窗内部可以通过 `useAsyncModalRender()` 或 `useAsyncModalRenderContext()` 继续调用其他弹窗。
