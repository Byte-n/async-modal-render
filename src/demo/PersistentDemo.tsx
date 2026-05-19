import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { AsyncModalProps } from '../types';
import { useAsyncModalRender } from '../useAsyncModalRender';
import { demoLayout } from './demoLayout';
import { Modal } from './Modal';

interface PersistentModalProps extends AsyncModalProps {
  open?: boolean;
}

function PersistentModal({ open, onOk, onCancel }: PersistentModalProps) {
  const [count, setCount] = React.useState(0);

  return (
    <Modal title="持久化弹窗" open={open} onOk={() => onOk?.()} onCancel={() => onCancel?.()}>
      <View style={{ gap: 10 }}>
        <Text>这个弹窗的状态是持久化的。</Text>
        <Text>内部状态 Count: {count}</Text>
        <View style={demoLayout.row}>
          <Pressable style={demoLayout.button} onPress={() => setCount((value) => value + 1)}>
            <Text style={demoLayout.buttonText}>增加 (+)</Text>
          </Pressable>
          <Pressable style={demoLayout.button} onPress={() => setCount((value) => value - 1)}>
            <Text style={demoLayout.buttonText}>减少 (-)</Text>
          </Pressable>
        </View>
        <Text>即使关闭后再打开，内部状态也会被保留，因为组件没有被销毁。</Text>
      </View>
    </Modal>
  );
}

export function PersistentDemo() {
  const { render, holder, destroy } = useAsyncModalRender();

  const handleOpen = async () => {
    await render(
      PersistentModal,
      { open: true },
      {
        persistent: 'my-unique-modal',
        openField: 'open',
      },
    );
  };

  const handleDestroy = () => {
    destroy({ persistent: 'my-unique-modal' });
  };

  return (
    <View style={demoLayout.screen}>
      <View style={demoLayout.row}>
        <Pressable style={demoLayout.button} onPress={handleOpen}>
          <Text style={demoLayout.buttonText}>打开持久化弹窗</Text>
        </Pressable>
        <Pressable style={[demoLayout.button, demoLayout.dangerButton]} onPress={handleDestroy}>
          <Text style={demoLayout.buttonText}>销毁持久化弹窗 (重置状态)</Text>
        </Pressable>
      </View>
      {holder}
    </View>
  );
}
