# async-modal-render 使用示例

## Context 模式（推荐）

应用根节点包裹 Provider：

```tsx
import { AsyncModalRenderProvider } from 'async-modal-render';

<AsyncModalRenderProvider>
  <App />
</AsyncModalRenderProvider>
```

子组件中使用：

```tsx
import { useAsyncModalRenderContext, withAsyncModalPropsMapper } from 'async-modal-render';

// 不符合 AsyncModalProps 的组件，在模块顶层适配
const AdaptedModal = withAsyncModalPropsMapper(CustomModal, ['onConfirm', 'onClose']);

function MyComponent() {
  const { render, renderQuiet, renderPersistent } = useAsyncModalRenderContext();

  // 需要返回值
  const handleConfirm = async () => {
    try {
      const result = await render(InputModal, { title: '请输入' });
      console.log(result);
    } catch (e) {
      // 用户取消
    }
  };

  // 需要返回值 + 适配后的组件
  const handleAdapted = async () => {
    const result = await render(AdaptedModal, { header: '标题' });
  };

  // 不需要返回值
  const handleNotify = async () => {
    await renderQuiet(NoticeModal, { message: '操作成功' });
    // 取消时 result 为 undefined，不会抛错
  };

  // 持久化弹窗（关闭后保留状态，再次打开恢复）
  const handlePersistent = async () => {
    await renderPersistent(EditorModal, { open: true }, {
      persistent: 'editor',
      openField: 'open',
    });
  };
}
```

## Hook 模式

```tsx
import { useAsyncModalRender } from 'async-modal-render';

function MyComponent() {
  const { render, renderQuiet, holder } = useAsyncModalRender();

  const handleClick = async () => {
    const result = await render(MyModal, { title: '标题' });
  };

  return <div>{holder}</div>; // holder 必须放入 JSX
}
```

## Static 模式

```ts
import { asyncModalRender } from 'async-modal-render';

// 需要返回值
const result = await asyncModalRender(MyModal, { title: '标题' });

// 不需要返回值（quiet 模式）
await asyncModalRender(MyModal, { title: '标题' }, undefined, { quiet: true });
```
