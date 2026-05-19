import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAsyncModalRender } from '../useAsyncModalRender';
import { withAsyncModalPropsMapper } from '../withAsyncModalPropsMapper';
import { demoStyles } from './demoStyles';

interface LegacyDialogProps {
  title: string;
  confirm: (value: string) => void;
  close: () => void;
}

function LegacyDialog({ title, confirm, close }: LegacyDialogProps) {
  return (
    <View style={demoStyles.overlay}>
      <View style={demoStyles.modal}>
        <Text style={demoStyles.title}>{title}</Text>
        <Text style={demoStyles.body}>This component uses confirm/close instead of onOk/onCancel.</Text>
        <View style={demoStyles.row}>
          <Pressable style={[demoStyles.button, demoStyles.secondaryButton]} onPress={close}>
            <Text style={demoStyles.buttonText}>Close</Text>
          </Pressable>
          <Pressable style={demoStyles.button} onPress={() => confirm('mapped-confirmed')}>
            <Text style={demoStyles.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export function MapperDemo() {
  const { render, holder } = useAsyncModalRender();
  const [result, setResult] = React.useState('No result');
  const MappedLegacyDialog = React.useMemo(
    () => withAsyncModalPropsMapper(LegacyDialog, ['confirm', 'close']),
    [],
  );

  const openMapped = async () => {
    const value = await render(MappedLegacyDialog, { title: 'Mapped Dialog' });
    setResult(value);
  };

  return (
    <View style={demoStyles.screen}>
      <Text style={demoStyles.title}>Mapper Demo</Text>
      <Pressable style={demoStyles.button} onPress={openMapped}>
        <Text style={demoStyles.buttonText}>open mapped dialog</Text>
      </Pressable>
      <Text style={demoStyles.result}>{result}</Text>
      {holder}
    </View>
  );
}
