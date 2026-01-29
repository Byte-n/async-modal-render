import React, { useState } from 'react';
import { AsyncModalRenderProvider, useAsyncModalRenderContext, withAsyncModalPropsMapper } from 'async-modal-render';
import InputModal from './InputModal';
import CustomModal from './CustomModal';

// 适配 CustomModal
const AdaptedCustomModal = withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']);

const ChildComponent = () => {
  const [result, setResult] = useState<string>('');
  const {
    render,
    renderFactory,
    renderQuiet,
    renderPersistent,
    renderFactoryQuiet,
    renderFactoryPersistent,
  } = useAsyncModalRenderContext();

  // 基础 render
  const handleInputClick = async () => {
    try {
      const res = await render(InputModal, {
        title: 'Context 模式输入',
        placeholder: '请输入...',
        open: true
      });
      setResult(`输入弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('输入弹窗 - 取消');
    }
  };

  // renderFactory - 创建可重复调用的工厂函数
  const handleFactoryClick = async () => {
    const factory = renderFactory(InputModal, {
      title: 'Factory 模式输入',
      placeholder: '请输入...',
      open: true
    });

    try {
      // 可以多次调用同一个 factory
      const res = await factory();
      setResult(`Factory 弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('Factory 弹窗 - 取消');
    }
  };

  // renderQuiet - 静默模式，取消时返回 undefined 而不是 reject
  const handleQuietClick = async () => {
    const res = await renderQuiet(InputModal, {
      title: 'Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });
    if (res === undefined) {
      setResult('Quiet 弹窗 - 取消（返回 undefined）');
    } else {
      setResult(`Quiet 弹窗 - 结果: ${res}`);
    }
  };

  // renderPersistent - 持久化模式，可以控制弹窗的显示/隐藏
  const handlePersistentClick = async () => {
    try {
      const res = await renderPersistent(InputModal, {
        title: 'Persistent 模式输入',
        placeholder: '请输入...',
        open: true,
      }, {
        persistent: 'my-persistent-modal',
        openField: 'open',
      });
      setResult(`Persistent 弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('Persistent 弹窗 - 取消');
    }
  };

  // renderFactoryQuiet - 工厂函数 + 静默模式
  const handleFactoryQuietClick = async () => {
    const factory = renderFactoryQuiet(InputModal, {
      title: 'Factory Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });

    const res = await factory();
    if (res === undefined) {
      setResult('Factory Quiet 弹窗 - 取消（返回 undefined）');
    } else {
      setResult(`Factory Quiet 弹窗 - 结果: ${res}`);
    }
  };

  // renderFactoryPersistent - 工厂函数 + 持久化模式
  const handleFactoryPersistentClick = async () => {
    const factory = renderFactoryPersistent(InputModal, {
      title: 'Factory Persistent 模式输入',
      placeholder: '请输入...',
      open: true,
    }, {
      persistent: 'my-factory-persistent-modal',
      openField: 'open',
    });

    try {
      const res = await factory();
      setResult(`Factory Persistent 弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('Factory Persistent 弹窗 - 取消');
    }
  };

  // 适配的自定义弹窗
  const handleCustomClick = async () => {
    try {
      const res = await render(AdaptedCustomModal, {
        header: 'Context 模式适配弹窗',
        visible: true,
      });
      setResult(`适配弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('适配弹窗 - 取消');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <strong>基础用法：</strong>
        </div>
        <button onClick={handleInputClick} style={{ marginRight: 8 }}>render</button>
        <button onClick={handleFactoryClick} style={{ marginRight: 8 }}>renderFactory</button>
        <button onClick={handleCustomClick}>适配弹窗</button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <strong>Quiet 模式（取消返回 undefined）：</strong>
        </div>
        <button onClick={handleQuietClick} style={{ marginRight: 8 }}>renderQuiet</button>
        <button onClick={handleFactoryQuietClick}>renderFactoryQuiet</button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <strong>Persistent 模式（持久化）：</strong>
        </div>
        <button onClick={handlePersistentClick} style={{ marginRight: 8 }}>renderPersistent</button>
        <button onClick={handleFactoryPersistentClick}>renderFactoryPersistent</button>
      </div>

      {result && (
        <div style={{ padding: 12, background: '#f0f0f0', borderRadius: 4 }}>
          操作结果: {result}
        </div>
      )}
    </div>
  );
};

export default () => {
  return (
    <AsyncModalRenderProvider>
      <ChildComponent />
    </AsyncModalRenderProvider>
  );
};
