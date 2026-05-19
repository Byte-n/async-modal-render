import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { AsyncModalProps, AsyncModalRenderProvider, useAsyncModalRenderContext } from '../src';

const TestModal: React.FC<AsyncModalProps & { title: string; open?: boolean }> = ({ title, open = true, onOk }) => {
  if (!open) return null;
  return (
    <View testID="test-modal">
      <Text testID="modal-title">{title}</Text>
      <Pressable testID="ok-button" onPress={() => onOk?.('context-confirmed')}>
        <Text>OK</Text>
      </Pressable>
    </View>
  );
};

describe('AsyncModalRenderContext', () => {
  it('provides render ability through AsyncModalRenderProvider', async () => {
    const onResult = jest.fn();
    const Consumer = () => {
      const { render: renderModal } = useAsyncModalRenderContext();
      return (
        <Pressable
          testID="open-context-modal"
          onPress={async () => {
            onResult(await renderModal(TestModal, { title: 'Context Modal' }));
          }}
        >
          <Text>Open</Text>
        </Pressable>
      );
    };

    const screen = render(
      <AsyncModalRenderProvider>
        <Consumer />
      </AsyncModalRenderProvider>,
    );

    fireEvent.press(screen.getByTestId('open-context-modal'));
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Context Modal');
    fireEvent.press(screen.getByTestId('ok-button'));

    await waitFor(() => expect(onResult).toHaveBeenCalledWith('context-confirmed'));
    expect(screen.queryByTestId('test-modal')).toBeNull();
  });

  it('destroyStrategy=hook cleans modal when consumer unmounts', async () => {
    const Consumer = () => {
      const { render: renderModal } = useAsyncModalRenderContext();
      return (
        <Pressable
          testID="open-hook-modal"
          onPress={() => {
            renderModal(TestModal, { title: 'Hook Strategy' }, { destroyStrategy: 'hook' }).catch(() => {});
          }}
        >
          <Text>Open</Text>
        </Pressable>
      );
    };
    const App = () => {
      const [showConsumer, setShowConsumer] = React.useState(true);
      return (
        <AsyncModalRenderProvider>
          <Pressable testID="toggle-consumer" onPress={() => setShowConsumer((v) => !v)}>
            <Text>Toggle</Text>
          </Pressable>
          {showConsumer ? <Consumer /> : null}
        </AsyncModalRenderProvider>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-hook-modal'));
    expect(screen.getByTestId('test-modal')).toBeTruthy();
    fireEvent.press(screen.getByTestId('toggle-consumer'));

    await waitFor(() => expect(screen.queryByTestId('test-modal')).toBeNull());
  });

  it('throws a clear error outside provider', () => {
    const Consumer = () => {
      const { render: renderModal } = useAsyncModalRenderContext();
      return (
        <Pressable testID="open-modal" onPress={() => renderModal(TestModal, { title: 'No Provider' })}>
          <Text>Open</Text>
        </Pressable>
      );
    };

    const screen = render(<Consumer />);
    expect(() => fireEvent.press(screen.getByTestId('open-modal'))).toThrow(/AsyncModalRenderProvider/);
  });
});
