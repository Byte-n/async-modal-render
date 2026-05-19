import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { AsyncModalProps } from '../types';
import { demoStyles } from './demoStyles';

export interface CounterModalProps extends AsyncModalProps {
  open?: boolean;
  title: string;
  onOk?: (count: number) => void;
}

export function CounterModal({ open = true, title, onOk, onCancel }: CounterModalProps) {
  const [count, setCount] = React.useState(0);

  if (!open) return null;

  return (
    <View style={demoStyles.overlay}>
      <View style={demoStyles.modal}>
        <Text style={demoStyles.title}>{title}</Text>
        <Text style={demoStyles.body}>Count: {count}</Text>
        <View style={demoStyles.row}>
          <Pressable style={demoStyles.button} onPress={() => setCount((value) => value + 1)}>
            <Text style={demoStyles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={[demoStyles.button, demoStyles.secondaryButton]} onPress={() => onCancel?.()}>
            <Text style={demoStyles.buttonText}>Cancel</Text>
          </Pressable>
          <Pressable style={demoStyles.button} onPress={() => onOk?.(count)}>
            <Text style={demoStyles.buttonText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
