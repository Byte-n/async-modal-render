import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { AsyncModalProps } from '../types';
import { demoStyles } from './demoStyles';

export interface ConfirmModalProps extends AsyncModalProps {
  open?: boolean;
  title: string;
  message: string;
  onOk?: (value: 'confirmed') => void;
}

export function ConfirmModal({ open = true, title, message, onOk, onCancel }: ConfirmModalProps) {
  if (!open) return null;

  return (
    <View style={demoStyles.overlay}>
      <View style={demoStyles.modal}>
        <Text style={demoStyles.title}>{title}</Text>
        <Text style={demoStyles.body}>{message}</Text>
        <View style={demoStyles.row}>
          <Pressable style={[demoStyles.button, demoStyles.secondaryButton]} onPress={() => onCancel?.()}>
            <Text style={demoStyles.buttonText}>Cancel</Text>
          </Pressable>
          <Pressable style={demoStyles.button} onPress={() => onOk?.('confirmed')}>
            <Text style={demoStyles.buttonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
