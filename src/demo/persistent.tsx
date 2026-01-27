import React, { useState } from 'react';
import { useAsyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface PersistentModalProps extends AsyncModalProps {
  open?: boolean;
}

const PersistentModal: React.FC<PersistentModalProps> = ({ open, onOk, onCancel }) => {
  const [count, setCount] = useState(0);

  return (
    <Modal 
      title="持久化弹窗" 
      open={open} 
      onOk={() => onOk?.()} 
      onCancel={() => onCancel?.()}
    >
      <p>这个弹窗的状态是持久化的。</p>
      <p>内部状态 Count: {count}</p>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setCount(c => c + 1)} style={{ marginRight: 8 }}>增加 (+)</button>
        <button onClick={() => setCount(c => c - 1)}>减少 (-)</button>
      </div>
      <p>即使关闭后再打开，内部状态也会被保留，因为组件没有被销毁。</p>
    </Modal>
  );
};

export default () => {
  const { render, holder, destroy } = useAsyncModalRender();

  const handleOpen = async () => {
    await render(PersistentModal, 
      {}, 
      { 
        persistent: 'my-unique-modal', // 指定一个固定的 key 实现持久化
        openField: 'open'             // 指定控制显示的 prop 字段名
      }
    );
  };

  const handleDestroy = () => {
    // 销毁指定的持久化弹窗，这将清除其内部状态
    destroy({ persistent: 'my-unique-modal' });
  };

  return (
    <div>
      <button onClick={handleOpen} style={{ marginRight: 8 }}>打开持久化弹窗</button>
      <button onClick={handleDestroy}>销毁持久化弹窗 (重置状态)</button>
      {holder}
    </div>
  );
};
