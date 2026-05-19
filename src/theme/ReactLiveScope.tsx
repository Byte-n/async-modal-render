import React from 'react';
import { Pressable, Text, View } from 'react-native';
import * as RN from 'react-native';
import {
  AsyncModalRenderCancelError,
  AsyncModalRenderProvider,
  useAsyncModalRender,
  useAsyncModalRenderContext,
  withAsyncModalPropsMapper,
} from '../index';
import {
  BasicDemo,
  ContextDemo,
  CustomModal,
  HookDemo,
  InputModal,
  Modal,
  PersistentDemo,
} from '../demo';

const buttonStyle = {
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 6,
  backgroundColor: '#2563eb',
} as const;

const dangerButtonStyle = {
  backgroundColor: '#dc2626',
} as const;

const buttonTextStyle = {
  color: '#ffffff',
  fontWeight: '600',
} as const;

const resultStyle = {
  padding: 12,
  borderRadius: 4,
  backgroundColor: '#f0f0f0',
  color: '#334155',
} as const;

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: '600' }}>{title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{children}</View>
    </View>
  );
}

function DemoButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{title}</Text>
    </Pressable>
  );
}

const ReactLiveScope: Record<string, unknown> = {
  React,
  ...React,
  ...RN,
  AsyncModalRenderCancelError,
  AsyncModalRenderProvider,
  useAsyncModalRender,
  useAsyncModalRenderContext,
  withAsyncModalPropsMapper,
  BasicDemo,
  ContextDemo,
  CustomModal,
  HookDemo,
  InputModal,
  Modal,
  PersistentDemo,
  DemoButton,
  DemoSection,
  buttonStyle,
  dangerButtonStyle,
  buttonTextStyle,
  resultStyle,
};

export default ReactLiveScope;
