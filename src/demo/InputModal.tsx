import React from 'react';
import { TextInput } from 'react-native';
import type { AsyncModalProps } from '../types';
import { Modal } from './Modal';
import { modalStyles } from './modalStyles';

export interface InputModalProps extends AsyncModalProps {
  open?: boolean;
  title?: string;
  placeholder?: string;
  defaultValue?: string;
  onOk?: (value: string) => void;
  onCancel?: (value?: string) => void;
}

export function InputModal({
  open,
  title = '请输入',
  placeholder = '请输入内容',
  defaultValue = '',
  onOk,
  onCancel,
}: InputModalProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Modal open={open} title={title} onOk={() => onOk?.(value)} onCancel={onCancel}>
      <TextInput
        style={modalStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        autoFocus
      />
    </Modal>
  );
}
