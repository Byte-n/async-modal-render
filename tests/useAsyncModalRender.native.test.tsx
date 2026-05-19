import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import {
  AsyncModalProps,
  AsyncModalRenderCancelError,
  PersistentComponentConflictError,
  useAsyncModalRender,
  withAsyncModalPropsMapper,
} from '../src';

interface TestModalProps extends AsyncModalProps {
  title: string;
  open?: boolean;
  message?: string;
}

const TestModal: React.FC<TestModalProps> = ({ title, message, open = true, onOk, onCancel }) => {
  if (!open) return null;
  return (
    <View testID="test-modal">
      <Text testID="modal-title">{title}</Text>
      {message ? <Text testID="modal-message">{message}</Text> : null}
      <Pressable testID="ok-button" onPress={() => onOk?.('confirmed')}>
        <Text>OK</Text>
      </Pressable>
      <Pressable testID="cancel-button" onPress={() => onCancel?.()}>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  );
};

interface PersistentModalProps extends AsyncModalProps {
  open?: boolean;
  title: string;
}

const PersistentModal: React.FC<PersistentModalProps> = ({ open, title, onOk, onCancel }) => {
  const [count, setCount] = React.useState(0);
  if (!open) return null;
  return (
    <View testID="persistent-modal">
      <Text testID="modal-title">{title}</Text>
      <Text testID="count-value">{count}</Text>
      <Pressable testID="increment-button" onPress={() => setCount((c) => c + 1)}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable testID="ok-button" onPress={() => onOk?.(count)}>
        <Text>OK</Text>
      </Pressable>
      <Pressable testID="cancel-button" onPress={() => onCancel?.()}>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  );
};

describe('useAsyncModalRender', () => {
  it('renders a modal through holder and resolves with onOk value', async () => {
    const onResult = jest.fn();
    const App = () => {
      const { render: renderModal, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={async () => {
              onResult(await renderModal(TestModal, { title: 'Hook Modal', message: 'Hello' }));
            }}
          >
            <Text>Open</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));

    expect(screen.getByTestId('modal-title')).toHaveTextContent('Hook Modal');
    expect(screen.getByTestId('modal-message')).toHaveTextContent('Hello');

    fireEvent.press(screen.getByTestId('ok-button'));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith('confirmed'));
    expect(screen.queryByTestId('test-modal')).toBeNull();
  });

  it('rejects with AsyncModalRenderCancelError on cancel', async () => {
    const onError = jest.fn();
    const onCancel = jest.fn();
    const App = () => {
      const { render: renderModal, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={() => {
              renderModal(TestModal, { title: 'Cancel Modal', onCancel }).catch(onError);
            }}
          >
            <Text>Open</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));
    fireEvent.press(screen.getByTestId('cancel-button'));

    await waitFor(() => expect(onError).toHaveBeenCalledWith(expect.any(AsyncModalRenderCancelError)));
    expect(onCancel).toHaveBeenCalledWith(expect.any(AsyncModalRenderCancelError));
    expect(screen.queryByTestId('test-modal')).toBeNull();
  });

  it('renderQuiet resolves undefined on cancel', async () => {
    const onResult = jest.fn();
    const onError = jest.fn();
    const App = () => {
      const { renderQuiet, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={() => {
              renderQuiet(TestModal, { title: 'Quiet Modal' }).then(onResult).catch(onError);
            }}
          >
            <Text>Open</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));
    fireEvent.press(screen.getByTestId('cancel-button'));

    await waitFor(() => expect(onResult).toHaveBeenCalledWith(undefined));
    expect(onError).not.toHaveBeenCalled();
  });

  it('keeps persistent modal state when reopened and removes it with destroy', async () => {
    const App = () => {
      const { renderPersistent, destroy, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={() => {
              renderPersistent(PersistentModal, { title: 'Persistent' }, { persistent: 'p', openField: 'open' }).catch(() => {});
            }}
          >
            <Text>Open</Text>
          </Pressable>
          <Pressable testID="destroy-modal" onPress={() => destroy({ persistent: 'p' })}>
            <Text>Destroy</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));
    fireEvent.press(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');

    fireEvent.press(screen.getByTestId('ok-button'));
    await waitFor(() => expect(screen.queryByTestId('persistent-modal')).toBeNull());

    fireEvent.press(screen.getByTestId('open-modal'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');

    fireEvent.press(screen.getByTestId('destroy-modal'));
    await waitFor(() => expect(screen.queryByTestId('persistent-modal')).toBeNull());
  });

  it('renderFactory.destroyModal removes all factory-created instances', async () => {
    const App = () => {
      const { renderFactory, holder } = useAsyncModalRender();
      const factoryRef = React.useRef<ReturnType<typeof renderFactory> | null>(null);
      if (!factoryRef.current) {
        factoryRef.current = renderFactory(TestModal, { title: 'Factory Modal' });
      }
      return (
        <View>
          <Pressable
            testID="open-twice"
            onPress={() => {
              factoryRef.current?.().catch(() => {});
              factoryRef.current?.().catch(() => {});
            }}
          >
            <Text>Open Twice</Text>
          </Pressable>
          <Pressable testID="destroy-all" onPress={() => factoryRef.current?.destroyModal()}>
            <Text>Destroy All</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-twice'));
    expect(screen.getAllByTestId('test-modal')).toHaveLength(2);
    fireEvent.press(screen.getByTestId('destroy-all'));
    await waitFor(() => expect(screen.queryAllByTestId('test-modal')).toHaveLength(0));
  });

  it('rejects persistent key reuse with a different component', async () => {
    const OtherModal: React.FC<TestModalProps> = ({ open = true }) => (open ? <View testID="other-modal" /> : null);
    const onError = jest.fn();
    const App = () => {
      const { renderPersistent, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-first"
            onPress={() => {
              renderPersistent(TestModal, { title: 'A' }, { persistent: 'conflict', openField: 'open' }).catch(() => {});
            }}
          >
            <Text>Open First</Text>
          </Pressable>
          <Pressable
            testID="open-conflict"
            onPress={() => {
              renderPersistent(OtherModal, { title: 'B' }, { persistent: 'conflict', openField: 'open' }).catch(onError);
            }}
          >
            <Text>Open Conflict</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-first'));
    await waitFor(() => expect(screen.getByTestId('test-modal')).toBeTruthy());
    fireEvent.press(screen.getByTestId('open-conflict'));
    await waitFor(() => expect(onError).toHaveBeenCalledWith(expect.any(PersistentComponentConflictError)));
  });

  it('withAsyncModalPropsMapper adapts non-standard callback prop names', async () => {
    interface CustomModalProps {
      title: string;
      confirm: (value: string) => void;
      close: () => void;
    }
    const CustomModal: React.FC<CustomModalProps> = ({ title, confirm }) => (
      <View testID="custom-modal">
        <Text>{title}</Text>
        <Pressable testID="confirm-button" onPress={() => confirm('mapped-confirmed')}>
          <Text>Confirm</Text>
        </Pressable>
      </View>
    );
    const MappedModal = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close']);
    const onResult = jest.fn();

    const App = () => {
      const { render: renderModal, holder } = useAsyncModalRender();
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={async () => {
              onResult(await renderModal(MappedModal, { title: 'Mapped' }));
            }}
          >
            <Text>Open</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));
    fireEvent.press(screen.getByTestId('confirm-button'));
    await waitFor(() => expect(onResult).toHaveBeenCalledWith('mapped-confirmed'));
  });

  it('destroyModal can be called twice without throwing', async () => {
    const App = () => {
      const { render: renderModal, holder } = useAsyncModalRender();
      const promiseRef = React.useRef<ReturnType<typeof renderModal> | null>(null);
      return (
        <View>
          <Pressable
            testID="open-modal"
            onPress={() => {
              promiseRef.current = renderModal(TestModal, { title: 'Destroy' });
              promiseRef.current.catch(() => {});
            }}
          >
            <Text>Open</Text>
          </Pressable>
          <Pressable
            testID="destroy-modal"
            onPress={() => {
              promiseRef.current?.destroyModal();
              promiseRef.current?.destroyModal();
            }}
          >
            <Text>Destroy</Text>
          </Pressable>
          {holder}
        </View>
      );
    };

    const screen = render(<App />);
    fireEvent.press(screen.getByTestId('open-modal'));
    expect(screen.getByTestId('test-modal')).toBeTruthy();
    expect(() => fireEvent.press(screen.getByTestId('destroy-modal'))).not.toThrow();
    await waitFor(() => expect(screen.queryByTestId('test-modal')).toBeNull());
  });
});
