import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Modal } from './Modal';
import { modalStyles } from './modalStyles';

export interface CustomModalProps {
  visible?: boolean;
  header?: string;
  onSubmit?: (value: string) => void;
  onClose?: () => void;
}

export function CustomModal({
  visible = true,
  header = '自定义弹窗',
  onSubmit,
  onClose,
}: CustomModalProps) {
  const [value, setValue] = React.useState('');

  return (
    <Modal open={visible} title={header} onOk={() => onSubmit?.(value)} onCancel={onClose} okText="提交" cancelText="关闭">
      <View style={{ gap: 8 }}>
        <Text>这是一个非标准 Props 的弹窗</Text>
        <TextInput style={modalStyles.input} placeholder="请输入..." value={value} onChangeText={setValue} />
      </View>
    </Modal>
  );
}
