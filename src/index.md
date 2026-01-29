# 使用手册

以 Promise 的方式使用弹窗组件，支持多种使用方式，简化弹窗的异步交互逻辑。

## 代码演示

### 基础使用 - asyncModalRender

使用 `asyncModalRender` 函数直接渲染弹窗组件到指定容器。

<code src="./demo/basic.tsx"></code>

### Hook 使用 - useAsyncModalRender

使用 `useAsyncModalRender` Hook 在组件内管理弹窗。

<code src="./demo/useAsyncModal.tsx"></code>

### Context 使用 - AsyncModalRenderProvider

使用 `AsyncModalRenderProvider` 和 `useAsyncModalRenderContext` 在应用中共享弹窗渲染能力。

<code src="./demo/context.tsx"></code>

### 持久化使用 - persistent

通过 `persistent` 配置，可以实现弹窗状态的持久化。关闭弹窗时不会销毁组件，而是通过 `openField` 指定控制隐藏、显示的字段。

<code src="./demo/persistent.tsx"></code>

### Props 转换

默认的回调函数是 `onOk`、`onCancel`，这可能与现有的弹窗组件的回调不一致。这有两种处理方式：

* 定义 `props` 符合 `AsyncModalProps` 类型的弹窗，并在内部调用现有的弹窗组件。相对于做一层 `props` 键名的转换
* 使用内置的高阶函数 `withAsyncModalPropsMapper`，也是做了一层 `props` 键名的转换

下面是 `withAsyncModalPropsMapper` 的使用：
```tsx | pure
import { withAsyncModalPropsMapper, ComputeAsyncModalProps } from 'async-modal-render'

interface BusinessModalProps {
  onClose: VoidFunction;
  onFinished: (num: number) => void;
  text: string;
  num?: number;
}
function BusinessModal(_: BusinessModalProps) {
  return <div />;
}

interface StandardModalProps {
  onCancel: VoidFunction;
  onOk: (num: number) => void;
  text: string;
  num?: number;
}

function StandardModal(_: StandardModalProps) {
  return <div />;
}

async function go() {
  const props: ComputeAsyncModalProps<StandardModalProps> = {
    text: 'string',
    num: 1,
    onOk: (_: number) => void 0,
    onCancel: (_?: unknown) => void 0,
  };

  // 类型正确
  const result: number = await asyncModalRender(StandardModal, props);
  console.log('result:', result);

  // 类型正确, 使用 withAsyncModalPropsMapper，将 onFinished 映射为 onOk, onClose 映射为 onCancel，内部会自动处理 类型映射。
  const Comp = withAsyncModalPropsMapper(BusinessModal, ['onFinished', 'onClose']);
  const data: number = await asyncModalRender(Comp, props);
  console.log('data:', data);
}
```

## `withAsyncModalPropsMapper` 与 `persistent` 注意事项

当使用 `persistent` 选项进行持久化渲染时，系统会严格检查同一个 `persistent` key 是否始终对应同一个**组件引用**。如果引用发生变化（即使是功能相同的不同组件类），系统会抛出 `PersistentComponentConflictError` 错误以防止 React 状态丢失。

因此，在使用 `withAsyncModalPropsMapper` 时请注意：

1.  **内部缓存机制**：`withAsyncModalPropsMapper` 内部实现了缓存。对于**相同的原组件**和**相同的映射配置**，它总是返回**同一个组件引用**。这意味着你可以在代码中多次调用它而不用担心引用变化导致的持久化冲突。
2.  **禁止混用**：切勿对同一个 `persistent` key 混用“原组件”和“包装后的组件”，或者“不同映射配置的包装组件”。

```typescript
// ✅ 正确：引用一致（推荐在组件外定义，或者直接在 render 中调用，利用内部缓存）
const MappedModal = withAsyncModalPropsMapper(MyModal, ['onConfirm', 'onClose']);
render(MappedModal, {}, { persistent: 'key-1', openField: 'visible' });
render(MappedModal, {}, { persistent: 'key-1', openField: 'visible' });

// ✅ 正确：得益于 withAsyncModalPropsMapper 的内部缓存，这也是安全的
render(withAsyncModalPropsMapper(MyModal, ['onConfirm', 'onClose']), {}, { persistent: 'key-2', openField: 'visible' });
render(withAsyncModalPropsMapper(MyModal, ['onConfirm', 'onClose']), {}, { persistent: 'key-2', openField: 'visible' });

// ❌ 错误：同一个 key 对应的组件引用发生了变化
// 第一次：使用原组件
render(MyModal, {}, { persistent: 'key-3', openField: 'visible' });
// 第二次：使用包装后的组件 -> 💥 抛出 PersistentComponentConflictError
render(withAsyncModalPropsMapper(MyModal, ...), {}, { persistent: 'key-3', openField: 'visible' });
```

## API

详细 API 文档请参考 [API](/api)。

## 注意事项

1. 自定义弹窗组件必须继承 `AsyncModalProps` 接口
2. 弹窗组件需要在适当的时机调用 `onOk` 或 `onCancel` 方法
3. 使用 `useAsyncModalRender` 时，必须将 `holder` 元素放置在组件的 JSX 中
4. 使用 `useAsyncModalRenderContext` 时，必须确保组件在 `AsyncModalRenderProvider` 内部
5. 只允许从公开的模块声明中导入，例如：`import { asyncModalRender } from 'async-modal-render'`
