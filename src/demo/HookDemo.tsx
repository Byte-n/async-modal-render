import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AsyncModalRenderCancelError } from '../utils/AsyncModalRenderCancelError';
import { useAsyncModalRender } from '../useAsyncModalRender';
import { withAsyncModalPropsMapper } from '../withAsyncModalPropsMapper';
import { CustomModal } from './CustomModal';
import { demoLayout } from './demoLayout';
import { InputModal } from './InputModal';

export function HookDemo() {
  const [result, setResult] = React.useState('');
  const {
    render,
    renderFactory,
    renderQuiet,
    renderPersistent,
    renderQuietFactory,
    renderPersistentFactory,
    holder,
  } = useAsyncModalRender();
  const AdaptedCustomModal = React.useMemo(
    () => withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']),
    [],
  );

  const handleInputClick = async () => {
    try {
      const value = await render(InputModal, {
        title: 'Hook 模式输入',
        placeholder: '请输入...',
        open: true,
      });
      setResult(`输入弹窗 - 结果: ${value}`);
    } catch {
      setResult('输入弹窗 - 取消');
    }
  };

  const handleFactoryClick = async () => {
    const factory = renderFactory(InputModal, {
      title: 'Factory 模式输入',
      placeholder: '请输入...',
      open: true,
    });

    try {
      const value = await factory();
      setResult(`Factory 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Factory 弹窗 - 取消');
    }
  };

  const handleQuietClick = async () => {
    const value = await renderQuiet(InputModal, {
      title: 'Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });
    setResult(value === undefined ? 'Quiet 弹窗 - 取消（返回 undefined）' : `Quiet 弹窗 - 结果: ${value}`);
  };

  const handlePersistentClick = async () => {
    try {
      const value = await renderPersistent(
        InputModal,
        {
          title: 'Persistent 模式输入',
          placeholder: '请输入...',
          open: true,
        },
        {
          persistent: 'my-persistent-modal',
          openField: 'open',
        },
      );
      setResult(`Persistent 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Persistent 弹窗 - 取消');
    }
  };

  const handleFactoryQuietClick = async () => {
    const factory = renderQuietFactory(InputModal, {
      title: 'Factory Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });
    const value = await factory();
    setResult(value === undefined ? 'Factory Quiet 弹窗 - 取消（返回 undefined）' : `Factory Quiet 弹窗 - 结果: ${value}`);
  };

  const handleFactoryPersistentClick = async () => {
    const factory = renderPersistentFactory(
      InputModal,
      {
        title: 'Factory Persistent 模式输入',
        placeholder: '请输入...',
        open: true,
      },
      {
        persistent: 'my-factory-persistent-modal',
        openField: 'open',
      },
    );

    try {
      const value = await factory();
      setResult(`Factory Persistent 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Factory Persistent 弹窗 - 取消');
    }
  };

  const handleCustomClick = async () => {
    try {
      const value = await renderPersistent(
        AdaptedCustomModal,
        {
          header: 'Hook 模式适配弹窗',
          visible: true,
        },
        { persistent: 'hook-adapted-modal', openField: 'visible' },
      );
      setResult(`适配弹窗 - 结果: ${value}`);
    } catch (error) {
      if (error instanceof AsyncModalRenderCancelError) {
        setResult('适配弹窗 - 取消');
        return;
      }
      throw error;
    }
  };

  return (
    <View style={demoLayout.screen}>
      <DemoSection title="基础用法：">
        <DemoButton title="render" onPress={handleInputClick} />
        <DemoButton title="renderFactory" onPress={handleFactoryClick} />
        <DemoButton title="适配弹窗" onPress={handleCustomClick} />
      </DemoSection>
      <DemoSection title="Quiet 模式（取消返回 undefined）：">
        <DemoButton title="renderQuiet" onPress={handleQuietClick} />
        <DemoButton title="renderQuietFactory" onPress={handleFactoryQuietClick} />
      </DemoSection>
      <DemoSection title="Persistent 模式（持久化）：">
        <DemoButton title="renderPersistent" onPress={handlePersistentClick} />
        <DemoButton title="renderPersistentFactory" onPress={handleFactoryPersistentClick} />
      </DemoSection>
      {result ? <Text style={demoLayout.result}>操作结果: {result}</Text> : null}
      {holder}
    </View>
  );
}

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={demoLayout.section}>
      <Text style={demoLayout.label}>{title}</Text>
      <View style={demoLayout.row}>{children}</View>
    </View>
  );
}

function DemoButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable style={demoLayout.button} onPress={onPress}>
      <Text style={demoLayout.buttonText}>{title}</Text>
    </Pressable>
  );
}
