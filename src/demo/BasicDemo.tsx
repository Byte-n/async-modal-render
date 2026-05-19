import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAsyncModalRender } from '../useAsyncModalRender';
import { withAsyncModalPropsMapper } from '../withAsyncModalPropsMapper';
import { CustomModal } from './CustomModal';
import { demoLayout } from './demoLayout';
import { InputModal } from './InputModal';

export function BasicDemo() {
  const [result, setResult] = React.useState('');
  const { render, holder } = useAsyncModalRender();
  const AdaptedCustomModal = React.useMemo(
    () => withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']),
    [],
  );

  const handleInputClick = async () => {
    try {
      const value = await render(InputModal, {
        title: '请输入姓名',
        placeholder: '例如：张三',
        open: true,
      });
      setResult(`输入弹窗 - 结果: ${value}`);
    } catch {
      setResult('输入弹窗 - 取消');
    }
  };

  const handleCustomClick = async () => {
    try {
      const value = await render(AdaptedCustomModal, {
        header: '自定义适配弹窗',
        visible: true,
      });
      setResult(`适配弹窗 - 结果: ${value}`);
    } catch {
      setResult('适配弹窗 - 取消');
    }
  };

  return (
    <View style={demoLayout.screen}>
      <View style={demoLayout.row}>
        <Pressable style={demoLayout.button} onPress={handleInputClick}>
          <Text style={demoLayout.buttonText}>输入弹窗</Text>
        </Pressable>
        <Pressable style={demoLayout.button} onPress={handleCustomClick}>
          <Text style={demoLayout.buttonText}>非标准弹窗(适配)</Text>
        </Pressable>
      </View>
      {result ? <Text style={demoLayout.result}>操作结果: {result}</Text> : null}
      {holder}
    </View>
  );
}
