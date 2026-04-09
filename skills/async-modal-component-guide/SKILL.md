---
name: async-modal-component-guide
description: "定义符合 async-modal-render 规范的弹窗组件最佳实践。当用户需要创建新的弹窗组件、编写弹窗组件代码、或将现有弹窗适配为 async-modal-render 可用的组件时触发。覆盖：(1) AsyncModalProps 接口规范 (2) 不同类型弹窗的 props 设计 (3) withAsyncModalPropsMapper 适配非标准组件 (4) 持久化弹窗的 open 控制"
---

# 定义符合 async-modal-render 规范的弹窗组件

## 核心规范

弹窗组件需要接收 `onOk` 和 `onCancel` 回调：

```ts
import { AsyncModalProps } from 'async-modal-render';

interface MyModalProps extends AsyncModalProps {
  // 业务 props...
  onOk?: (result: ResultType) => void;  // 确认时调用，参数即为 Promise resolve 值
  onCancel?: (error?: any) => void;     // 取消/关闭时调用
}
```

关键点：
- `onOk` 的第一个参数类型决定了 `render()` 返回的 Promise resolve 类型
- 需要持久化时，额外定义一个 `boolean` 类型的显隐控制 prop（如 `open`）

## 不符合规范的组件

若组件回调不是 `onOk`/`onCancel`，在模块顶层用 `withAsyncModalPropsMapper` 适配：

```ts
import { withAsyncModalPropsMapper } from 'async-modal-render';

// onConfirm -> onOk, onDismiss -> onCancel
const AdaptedModal = withAsyncModalPropsMapper(ThirdPartyModal, ['onConfirm', 'onDismiss']);
```

## 示例

### 1. 仅展示信息的弹窗

`onOk` 无参数，Promise resolve 值为 `void`。

```tsx
interface InfoModalProps extends AsyncModalProps {
  title: string;
  message: string;
}

const InfoModal: FC<InfoModalProps> = ({ title, message, onOk }) => (
  <Modal title={title}>
    <p>{message}</p>
    <Button onClick={() => onOk?.()}>知道了</Button>
  </Modal>
);
```

### 2. 提交表单返回数据的弹窗

`onOk` 参数类型即为调用方拿到的返回值类型。

```tsx
interface FormModalProps extends AsyncModalProps {
  onOk?: (data: { name: string; age: number }) => void;
}

const FormModal: FC<FormModalProps> = ({ onOk, onCancel }) => {
  const [form, setForm] = useState({ name: '', age: 0 });
  return (
    <Modal>
      <Input value={form.name} onChange={name => setForm(f => ({ ...f, name }))} />
      <Input value={form.age} onChange={age => setForm(f => ({ ...f, age }))} />
      <Button onClick={() => onOk?.(form)}>提交</Button>
      <Button onClick={() => onCancel?.()}>取消</Button>
    </Modal>
  );
};
```

### 3. 弹窗内部触发另一个弹窗（需持久化）

弹窗关闭后内部可能还会弹出其他弹窗，需保留 React 节点不卸载。添加 `open` prop 控制显隐，内部通过 `useAsyncModalRender` 获取 render 能力。

```tsx
interface StepModalProps extends AsyncModalProps {
  open?: boolean;
  onOk?: (finalResult: string) => void;
}

const StepModal: FC<StepModalProps> = ({ open, onOk, onCancel }) => {
  const [result, setResult] = useState('')
  const [showSubModal, setShowSubModal] = useState(false)

  return (
    <>
      <Modal open={open}>
        <p>当前结果: {result}</p>
        <Button onClick={() => setShowSubModal(true)}>下一步（打开子弹窗）</Button>
        <Button onClick={() => onOk?.(result)}>完成</Button>
        <Button onClick={() => onCancel?.()}>取消</Button>
      </Modal>
      {showSubModal && (
        <FormModal
          onOk={(data) => { setResult(data.name); setShowSubModal(false) }}
          onCancel={() => setShowSubModal(false)}
        />
      )}
    </>
  )
}
```

## 设计要点

- `onOk` 的参数类型要精确定义，它决定了调用方拿到的返回值类型
- 仅展示信息的弹窗 `onOk` 无参数或参数为 `void`
- 需要持久化时，弹窗必须通过 `open` 等 boolean prop 控制显隐（`open=false` 时隐藏而非卸载）
- 弹窗内部可以通过 `useAsyncModalRender()` 或 `useAsyncModalRenderContext()` 继续调用其他弹窗
