# async-modal-render

[![npm version](https://img.shields.io/npm/v/async-modal-render.svg)](https://www.npmjs.com/package/async-modal-render)
[![license](https://img.shields.io/npm/l/async-modal-render.svg)](https://github.com/Byte-n/async-modal-render/blob/main/LICENSE)

一个将 React 模态框操作 Promise 化的轻量级工具库，让你可以使用 `async/await` 语法优雅地处理模态框交互。

[使用文档](https://byte-n.github.io/async-modal-render)

## 为什么需要 async-modal-render？

### 传统 Modal 的痛点

在传统的 Modal 使用方式中，我们需要通过回调函数来处理用户的操作，这导致代码逻辑分散，难以维护：

```tsx
// ❌ 传统方式：代码逻辑分散，难以阅读
function TraditionalWay() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  // 确认的回调逻辑 - 分散在另一个地方
  const handleOk = async (formData) => {
    try {
      await api.submit(formData);
      message.success('提交成功');
    } catch (error) {
      message.error('提交失败');
    } finally {
      setVisible(false);
    }
  };

  // 取消的回调逻辑 - 又在另一个地方
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={handleClick}>打开弹窗</Button>
      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <Form />
      </Modal>
    </>
  );
}
```

### async-modal-render 的优势

使用 async-modal-render，代码逻辑集中在一处，清晰易懂：

```tsx
import { asyncModalRender, AsyncModalRenderCancelError } from 'async-modal-render';

// ✅ async-modal-render 方式：逻辑集中，代码清晰
function AsyncModalWay() {
  const handleClick = async () => {
    try {
      // 弹窗逻辑、确认逻辑、后续处理都在一起
      const formData = await asyncModalRender(FormModal, { title: '填写表单' });

      // 用户点击确认后才会执行到这里
      await api.submit(formData);
      message.success('提交成功');

      // 继续后续操作
    } catch (error) {
      // 用户点击取消或发生错误都会进入这里
      if (error instanceof AsyncModalRenderCancelError) {
        console.log('用户取消了操作');
      } else {
        message.error('提交失败');
      }
    }
  };

  return <Button onClick={handleClick}>打开弹窗</Button>;
}
```

### 对比总结

| 特性 | 传统 Modal | async-modal-render |
|------|-----------|-----------------|
| 代码组织 | 回调函数分散在多处 | async/await 集中处理 |
| 可读性 | 需要跳转查看不同回调 | 从上到下线性阅读 |
| 流程控制 | 需要状态管理 | Promise 自然流转 |
| 错误处理 | 分散在各个回调 | try/catch 统一处理 |
| 异步操作 | 回调嵌套 | async/await 扁平化 |

## 特性

- 🎯 **Promise 化**：使用 async/await 处理模态框操作
- 🪶 **轻量级**：最小依赖，体积小
- 📦 **TypeScript**：完整的 TypeScript 支持
- ⚛️ **React**：支持 React 16.8+
- 🔧 **灵活**：兼容任何模态框组件库（Ant Design、Material-UI 等）

## 安装

```bash
npm install async-modal-render
```

或

```bash
yarn add async-modal-render
```

或

```bash
pnpm add async-modal-render
```

## 示例

```tsx
// ========== 创建一个模态框组件 ==========
function ConfirmModal({ onOk, onCancel, message }) {
  return (
    <div className="modal">
      <p>{message}</p>
      <button onClick={() => onOk('confirmed')}>确认</button>
      <button onClick={onCancel}>取消</button>
    </div>
  );
}

// ========== 在任何地方使用 async/await 调用 ==========
import { asyncModalRender, AsyncModalRenderCancelError } from 'async-modal-render';

async function deleteUser(userId) {
  try {
    // 等待用户确认
    const result = await asyncModalRender(ConfirmModal, {
      message: '确定要删除这个用户吗？'
    });

    // 用户点击了确认，继续执行
    await api.delete(`/users/${userId}`);
    message.success('删除成功！');
  } catch (error) {
    // 用户点击了取消或关闭了弹窗
    if (error instanceof AsyncModalRenderCancelError) {
      message.info('已取消');
    }
    // 其它错误
  }
}
```

就是这么简单！不需要状态管理，不需要回调地狱，只需要简单的 async/await 流程。

更多用法见：[文档](https://byte-n.github.io/async-modal-render)


## TODO

* [x] `useAsyncModalRenderContext` 的 `render` / `renderFactory` 的 `AsyncModalRenderOptions` 添加 `destroyStrategy?: 'hook' | 'context'`
  * `hook`: `useAsyncModalRenderContext` 当前组件卸载后销毁
  * `context`: `useAsyncModalRenderContext` 当前组件卸载后不销毁, 随着 `AsyncModalRenderProvider` 销毁
* [ ] 支持类组件的 Context 环境调用
* [x] `UseAsyncModalRenderReturn` 添加一个 `renderQuiet`/`renderSafe` 函数。此函数在 `onCancel` 时不抛出错误，直接返回 `undefined`
