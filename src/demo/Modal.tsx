import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { AsyncModalProps } from '../types';
import { modalStyles } from './modalStyles';

export interface ModalProps extends AsyncModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
}

export function Modal({
  open = true,
  title = '提示',
  children,
  okText = '确定',
  cancelText = '取消',
  footer,
  closable = true,
  maskClosable = true,
  onOk,
  onCancel,
}: ModalProps) {
  if (!open) return null;

  return (
    <Pressable style={modalStyles.mask} onPress={() => maskClosable && onCancel?.()}>
      <Pressable style={modalStyles.modal} onPress={() => undefined}>
        {closable && (
          <Pressable style={modalStyles.close} onPress={() => onCancel?.()}>
            <Text style={modalStyles.buttonText}>x</Text>
          </Pressable>
        )}
        {title ? <Text style={modalStyles.header}>{title}</Text> : null}
        <View style={modalStyles.body}>{children}</View>
        <ModalFooter footer={footer} okText={okText} cancelText={cancelText} onOk={onOk} onCancel={onCancel} />
      </Pressable>
    </Pressable>
  );
}

interface ModalFooterProps {
  footer?: React.ReactNode | null;
  okText?: string;
  cancelText?: string;
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}

function ModalFooter({ footer, okText, cancelText, onOk, onCancel }: ModalFooterProps) {
  if (footer === null) return null;
  if (footer !== undefined) return <View style={modalStyles.footer}>{footer}</View>;

  return (
    <View style={modalStyles.footer}>
      <Pressable style={modalStyles.button} onPress={() => onCancel?.()}>
        <Text style={modalStyles.buttonText}>{cancelText}</Text>
      </Pressable>
      <Pressable style={[modalStyles.button, modalStyles.primaryButton]} onPress={() => onOk?.()}>
        <Text style={[modalStyles.buttonText, modalStyles.primaryButtonText]}>{okText}</Text>
      </Pressable>
    </View>
  );
}
