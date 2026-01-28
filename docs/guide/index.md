# 快速开始

本指南将帮助你在 3 分钟内上手 async-modal-render。

## 安装

使用你喜欢的包管理器安装 async-modal-render：

<InstallDependencies 
  npm='$ npm install async-modal-render' 
  yarn='$ yarn add async-modal-render' 
  pnpm='$ pnpm install async-modal-render' 
/>
</InstallDependencies>

## 基本使用

### 创建 Modal 组件

创建一个符合 `AsyncModalProps` 接口的 Modal 组件。你的组件需要接收 `onOk` 和 `onCancel` 两个回调函数：

```tsx ｜ pure
import React from 'react';
import { AsyncModalProps } from 'async-modal-render';

interface ConfirmModalProps extends AsyncModalProps {
  ...
}

const ConfirmModal = ({ ..., onOk, onCancel }: ConfirmModalProps) => {
  return (
    <div className="modal-overlay">
      ...
      <div className="modal-footer">
        <button onClick={() => onCancel?.()}>取消</button>
        <button onClick={() => onOk?.('confirmed')}>确定</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
```

**关键点**：
- 继承 `AsyncModalProps` 接口
- 在适当的时机调用 `onOk()` 或 `onCancel()`
- `onOk()` 的参数会作为 Promise 的返回值

### 使用 asyncModalRender


```tsx ｜ pure
import { asyncModalRender } from 'async-modal-render';
import ConfirmModal from './ConfirmModal';

async function handleDelete() {
  try {
    const result = await asyncModalRender(ConfirmModal, {
      title: '确认删除',
      content: '此操作不可恢复，确定要删除吗？'
    });

    console.log('用户确认:', result); // 'confirmed'
    // 执行删除操作
    await deleteItem();
    alert('删除成功！');
  } catch (error) {
    console.log('用户取消了操作');
  }
}
```
### 使用已有的组件

业务中已有的弹窗组件的props定义可能不一致。此时就需要使用 `withAsyncModalPropsMapper` 高阶组件处理 `props` 的映射。这样就可以在不改动原本组件的情况下使用。

```tsx ｜ pure
import { withAsyncModalPropsMapper } from 'async-modal-render';

// EditorModal 是已有的组件，这里映射：onFinished -> onOk, onClose -> onCancel
const EditorModalMapper = withAsyncModalPropsMapper(EditorModal, ['onFinished', 'onClose']);

async function publishArticle() {
  try {
    const content = await asyncModalRender(EditorModalMapper, { title: '编辑文章' })
    ...
  } catch (error) {
    console.log('取消');
  }
}
```

## 多步骤交互

利用 async/await 的特性，可以轻松实现多步骤交互：

```tsx ｜ pure
async function publishArticle() {
  try {
    // 第一步：编辑内容
    const content = await asyncModalRender(EditorModal, {
      title: '编辑文章'
    });

    // 第二步：选择分类
    const category = await asyncModalRender(CategorySelectModal, {
      title: '选择分类'
    });

    // 第三步：确认发布
    await asyncModalRender(ConfirmModal, {
      title: '确认发布',
      content: `确定将文章发布到「${category}」分类吗？`
    });

    // 执行发布
    await api.publish({ content, category });
    alert('发布成功！');
  } catch (error) {
    console.log('取消发布');
  }
}
```

### 错误区分

使用 `AsyncModalRenderCancelError` 区分用户取消和其他错误：

```tsx ｜ pure
import { asyncModalRender, AsyncModalRenderCancelError } from 'async-modal-render';

async function handleSubmit() {
  try {
    const data = await asyncModalRender(FormModal, { title: '提交表单' });
    await api.submit(data);
  } catch (error) {
    if (error instanceof AsyncModalRenderCancelError) {
      // 用户主动取消
      console.log('用户取消了操作');
    } else {
      // API 调用失败或其他错误
      alert('提交失败：' + error.message);
    }
  }
}
```


## 常见问题

### Q: 必须要调用 onOk 或 onCancel 吗？

是的。如果不调用这两个方法中的任何一个，Promise 将永远不会 resolve 或 reject，导致代码卡住。

### Q: 可以多次调用 onOk 或 onCancel 吗？

可以调用，但只有第一次调用会生效。后续调用会被忽略。

### Q: 使用 useAsyncModalRender 时忘记渲染 holder 会怎样？

弹窗将无法显示，因为 holder 是弹窗的容器。务必在组件中渲染 `{holder}`。

### Q: asyncModalRender 和 useAsyncModalRender、useAsyncModalRenderContext 有什么区别？

- `asyncModalRender()` 是函数式调用，可在任何地方使用，会自动创建 DOM 容器
- `useAsyncModalRender()` 是 Hook，只能在函数组件中使用，需要手动渲染 holder
- `useAsyncModalRenderContext` 是 Context Hook，搭配 `AsyncModalRenderProvider` 可以省去手动渲染 holder 的步骤


## 下一步

现在你已经掌握了 async-modal-render 的基本用法！接下来可以：

- 查看 [完整文档](/components) 了解更多 API 细节
- 结合 Ant Design、Material-UI 等 UI 库使用
- 根据项目需求定制你自己的 Modal 组件

祝你使用愉快！ 🎉
