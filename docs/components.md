# 使用手册

以 Promise 的方式使用 React Native 弹窗组件，支持多种使用方式，简化弹窗的异步交互逻辑。

RN 版本不提供 Web 静态 `asyncModalRender()` 挂载 API；下面的基础示例沿用 main 分支的“输入弹窗 + 非标准弹窗适配”内容，并通过 `useAsyncModalRender()` 的 `holder` 在页面内完成挂载。

## 代码演示

### 基础使用 - render

使用 `render` 渲染弹窗组件，并通过 `withAsyncModalPropsMapper` 适配非标准回调名。

```tsx live
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAsyncModalRender, withAsyncModalPropsMapper } from 'async-modal-render-native';
import { CustomModal, InputModal } from './demo';

export default function Demo() {
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
    <View style={{ gap: 16, padding: 16 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        <Pressable style={buttonStyle} onPress={handleInputClick}>
          <Text style={buttonTextStyle}>输入弹窗</Text>
        </Pressable>
        <Pressable style={buttonStyle} onPress={handleCustomClick}>
          <Text style={buttonTextStyle}>非标准弹窗(适配)</Text>
        </Pressable>
      </View>
      {result ? <Text style={resultStyle}>操作结果: {result}</Text> : null}
      {holder}
    </View>
  );
}
```

### Hook 使用 - useAsyncModalRender

使用 `useAsyncModalRender` Hook 在组件内管理弹窗。

```tsx live
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  AsyncModalRenderCancelError,
  useAsyncModalRender,
  withAsyncModalPropsMapper,
} from 'async-modal-render-native';
import { CustomModal, InputModal } from './demo';

export default function Demo() {
  const [result, setResult] = React.useState('');
  const {
    render,
    renderFactory,
    renderQuiet,
    renderPersistent,
    renderQuietFactory,
    renderPersistentFactory,
    holder,
  } = useAsyncModalRender();
  const AdaptedCustomModal = React.useMemo(
    () => withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']),
    [],
  );

  const handleInputClick = async () => {
    try {
      const value = await render(InputModal, {
        title: 'Hook 模式输入',
        placeholder: '请输入...',
        open: true,
      });
      setResult(`输入弹窗 - 结果: ${value}`);
    } catch {
      setResult('输入弹窗 - 取消');
    }
  };

  const handleFactoryClick = async () => {
    const factory = renderFactory(InputModal, {
      title: 'Factory 模式输入',
      placeholder: '请输入...',
      open: true,
    });

    try {
      const value = await factory();
      setResult(`Factory 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Factory 弹窗 - 取消');
    }
  };

  const handleQuietClick = async () => {
    const value = await renderQuiet(InputModal, {
      title: 'Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });
    setResult(value === undefined ? 'Quiet 弹窗 - 取消（返回 undefined）' : `Quiet 弹窗 - 结果: ${value}`);
  };

  const handlePersistentClick = async () => {
    try {
      const value = await renderPersistent(
        InputModal,
        {
          title: 'Persistent 模式输入',
          placeholder: '请输入...',
          open: true,
        },
        {
          persistent: 'my-persistent-modal',
          openField: 'open',
        },
      );
      setResult(`Persistent 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Persistent 弹窗 - 取消');
    }
  };

  const handleFactoryQuietClick = async () => {
    const factory = renderQuietFactory(InputModal, {
      title: 'Factory Quiet 模式输入',
      placeholder: '请输入...',
      open: true,
    });
    const value = await factory();
    setResult(value === undefined ? 'Factory Quiet 弹窗 - 取消（返回 undefined）' : `Factory Quiet 弹窗 - 结果: ${value}`);
  };

  const handleFactoryPersistentClick = async () => {
    const factory = renderPersistentFactory(
      InputModal,
      {
        title: 'Factory Persistent 模式输入',
        placeholder: '请输入...',
        open: true,
      },
      {
        persistent: 'my-factory-persistent-modal',
        openField: 'open',
      },
    );

    try {
      const value = await factory();
      setResult(`Factory Persistent 弹窗 - 结果: ${value}`);
    } catch {
      setResult('Factory Persistent 弹窗 - 取消');
    }
  };

  const handleCustomClick = async () => {
    try {
      const value = await renderPersistent(
        AdaptedCustomModal,
        {
          header: 'Hook 模式适配弹窗',
          visible: true,
        },
        { persistent: 'hook-adapted-modal', openField: 'visible' },
      );
      setResult(`适配弹窗 - 结果: ${value}`);
    } catch (error) {
      if (error instanceof AsyncModalRenderCancelError) {
        setResult('适配弹窗 - 取消');
        return;
      }
      throw error;
    }
  };

  return (
    <View style={{ gap: 16, padding: 16 }}>
      <DemoSection title="基础用法：">
        <DemoButton title="render" onPress={handleInputClick} />
        <DemoButton title="renderFactory" onPress={handleFactoryClick} />
        <DemoButton title="适配弹窗" onPress={handleCustomClick} />
      </DemoSection>
      <DemoSection title="Quiet 模式（取消返回 undefined）：">
        <DemoButton title="renderQuiet" onPress={handleQuietClick} />
        <DemoButton title="renderQuietFactory" onPress={handleFactoryQuietClick} />
      </DemoSection>
      <DemoSection title="Persistent 模式（持久化）：">
        <DemoButton title="renderPersistent" onPress={handlePersistentClick} />
        <DemoButton title="renderPersistentFactory" onPress={handleFactoryPersistentClick} />
      </DemoSection>
      {result ? <Text style={resultStyle}>操作结果: {result}</Text> : null}
      {holder}
    </View>
  );
}
```

### Context 使用 - AsyncModalRenderProvider

使用 `AsyncModalRenderProvider` 和 `useAsyncModalRenderContext` 在应用中共享弹窗渲染能力。

```tsx live
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  AsyncModalRenderProvider,
  useAsyncModalRenderContext,
  withAsyncModalPropsMapper,
} from 'async-modal-render-native';
import { CustomModal, InputModal } from './demo';

export default function Demo() {
  const ChildComponent = React.useMemo(() => {
    return function ChildComponent() {
      const [result, setResult] = React.useState('');
      const {
        render,
        renderFactory,
        renderQuiet,
        renderPersistent,
        renderQuietFactory,
        renderPersistentFactory,
      } = useAsyncModalRenderContext();
      const AdaptedCustomModal = React.useMemo(
        () => withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']),
        [],
      );

      const handleInputClick = async () => {
        try {
          const value = await render(InputModal, {
            title: 'Context 模式输入',
            placeholder: '请输入...',
            open: true,
          });
          setResult(`输入弹窗 - 结果: ${value}`);
        } catch {
          setResult('输入弹窗 - 取消');
        }
      };

      const handleFactoryClick = async () => {
        const factory = renderFactory(InputModal, {
          title: 'Factory 模式输入',
          placeholder: '请输入...',
          open: true,
        });

        try {
          const value = await factory();
          setResult(`Factory 弹窗 - 结果: ${value}`);
        } catch {
          setResult('Factory 弹窗 - 取消');
        }
      };

      const handleQuietClick = async () => {
        const value = await renderQuiet(InputModal, {
          title: 'Quiet 模式输入',
          placeholder: '请输入...',
          open: true,
        });
        setResult(value === undefined ? 'Quiet 弹窗 - 取消（返回 undefined）' : `Quiet 弹窗 - 结果: ${value}`);
      };

      const handlePersistentClick = async () => {
        try {
          const value = await renderPersistent(
            InputModal,
            {
              title: 'Persistent 模式输入',
              placeholder: '请输入...',
              open: true,
            },
            {
              persistent: 'context-persistent-modal',
              openField: 'open',
            },
          );
          setResult(`Persistent 弹窗 - 结果: ${value}`);
        } catch {
          setResult('Persistent 弹窗 - 取消');
        }
      };

      const handleFactoryQuietClick = async () => {
        const factory = renderQuietFactory(InputModal, {
          title: 'Factory Quiet 模式输入',
          placeholder: '请输入...',
          open: true,
        });
        const value = await factory();
        setResult(value === undefined ? 'Factory Quiet 弹窗 - 取消（返回 undefined）' : `Factory Quiet 弹窗 - 结果: ${value}`);
      };

      const handleFactoryPersistentClick = async () => {
        const factory = renderPersistentFactory(
          InputModal,
          {
            title: 'Factory Persistent 模式输入',
            placeholder: '请输入...',
            open: true,
          },
          {
            persistent: 'context-factory-persistent-modal',
            openField: 'open',
          },
        );

        try {
          const value = await factory();
          setResult(`Factory Persistent 弹窗 - 结果: ${value}`);
        } catch {
          setResult('Factory Persistent 弹窗 - 取消');
        }
      };

      const handleCustomClick = async () => {
        try {
          const value = await render(AdaptedCustomModal, {
            header: 'Context 模式适配弹窗',
            visible: true,
          });
          setResult(`适配弹窗 - 结果: ${value}`);
        } catch {
          setResult('适配弹窗 - 取消');
        }
      };

      return (
        <View style={{ gap: 16, padding: 16 }}>
          <DemoSection title="基础用法：">
            <DemoButton title="render" onPress={handleInputClick} />
            <DemoButton title="renderFactory" onPress={handleFactoryClick} />
            <DemoButton title="适配弹窗" onPress={handleCustomClick} />
          </DemoSection>
          <DemoSection title="Quiet 模式（取消返回 undefined）：">
            <DemoButton title="renderQuiet" onPress={handleQuietClick} />
            <DemoButton title="renderQuietFactory" onPress={handleFactoryQuietClick} />
          </DemoSection>
          <DemoSection title="Persistent 模式（持久化）：">
            <DemoButton title="renderPersistent" onPress={handlePersistentClick} />
            <DemoButton title="renderPersistentFactory" onPress={handleFactoryPersistentClick} />
          </DemoSection>
          {result ? <Text style={resultStyle}>操作结果: {result}</Text> : null}
        </View>
      );
    };
  }, []);

  return (
    <AsyncModalRenderProvider>
      <ChildComponent />
    </AsyncModalRenderProvider>
  );
}
```

### 持久化使用 - persistent

通过 `persistent` 配置，可以实现弹窗状态的持久化。关闭弹窗时不会销毁组件，而是通过 `openField` 指定控制隐藏、显示的字段。

```tsx live
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAsyncModalRender } from 'async-modal-render-native';
import { Modal } from './demo';

export default function Demo() {
  const { render, holder, destroy } = useAsyncModalRender();
  const PersistentModal = React.useMemo(() => {
    return function PersistentModal({ open, onOk, onCancel }) {
      const [count, setCount] = React.useState(0);

      return (
        <Modal title="持久化弹窗" open={open} onOk={() => onOk?.()} onCancel={() => onCancel?.()}>
          <View style={{ gap: 10 }}>
            <Text>这个弹窗的状态是持久化的。</Text>
            <Text>内部状态 Count: {count}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              <Pressable style={buttonStyle} onPress={() => setCount((value) => value + 1)}>
                <Text style={buttonTextStyle}>增加 (+)</Text>
              </Pressable>
              <Pressable style={buttonStyle} onPress={() => setCount((value) => value - 1)}>
                <Text style={buttonTextStyle}>减少 (-)</Text>
              </Pressable>
            </View>
            <Text>即使关闭后再打开，内部状态也会被保留，因为组件没有被销毁。</Text>
          </View>
        </Modal>
      );
    };
  }, []);

  const handleOpen = async () => {
    await render(
      PersistentModal,
      { open: true },
      {
        persistent: 'my-unique-modal',
        openField: 'open',
      },
    );
  };

  const handleDestroy = () => {
    destroy({ persistent: 'my-unique-modal' });
  };

  return (
    <View style={{ gap: 16, padding: 16 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        <Pressable style={buttonStyle} onPress={handleOpen}>
          <Text style={buttonTextStyle}>打开持久化弹窗</Text>
        </Pressable>
        <Pressable style={[buttonStyle, dangerButtonStyle]} onPress={handleDestroy}>
          <Text style={buttonTextStyle}>销毁持久化弹窗 (重置状态)</Text>
        </Pressable>
      </View>
      {holder}
    </View>
  );
}
```

### Props 转换

默认的回调函数是 `onOk`、`onCancel`，这可能与现有弹窗组件的回调不一致。这有两种处理方式：

* 定义 `props` 符合 `AsyncModalProps` 类型的弹窗，并在内部调用现有弹窗组件
* 使用内置的高阶函数 `withAsyncModalPropsMapper` 做 `props` 键名转换

下面是 `withAsyncModalPropsMapper` 的使用：

```tsx
import { withAsyncModalPropsMapper } from 'async-modal-render-native';

interface BusinessModalProps {
  onClose: VoidFunction;
  onFinished: (num: number) => void;
  text: string;
  num?: number;
}

function BusinessModal(_: BusinessModalProps) {
  return null;
}

async function openBusinessModal() {
  const Comp = withAsyncModalPropsMapper(BusinessModal, ['onFinished', 'onClose']);

  const data: number = await render(Comp, {
    text: 'string',
    num: 1,
  });
}
```

## `withAsyncModalPropsMapper` 与 `persistent` 注意事项

当使用 `persistent` 选项进行持久化渲染时，系统会严格检查同一个 `persistent` key 是否始终对应同一个**组件引用**。如果引用发生变化，系统会抛出 `PersistentComponentConflictError` 错误以防止 React 状态丢失。

因此，在使用 `withAsyncModalPropsMapper` 时请注意：

1. **内部缓存机制**：对于相同的原组件和相同的映射配置，它总是返回同一个组件引用。
2. **禁止混用**：切勿对同一个 `persistent` key 混用原组件和包装后的组件，或者不同映射配置的包装组件。

```tsx
function openMappedModal() {
  const MappedModal = withAsyncModalPropsMapper(MyModal, ['onConfirm', 'onClose']);

  render(MappedModal, {}, { persistent: 'key-1', openField: 'visible' });
  render(MappedModal, {}, { persistent: 'key-1', openField: 'visible' });
}
```

## API

详细 API 文档请参考 [API](/api)。

## 注意事项

1. 自定义弹窗组件必须继承或兼容 `AsyncModalProps`。
2. 弹窗组件需要在适当的时机调用 `onOk` 或 `onCancel`。
3. 使用 `useAsyncModalRender` 时，必须将 `holder` 元素放置在组件 JSX 中。
4. 使用 `useAsyncModalRenderContext` 时，必须确保组件在 `AsyncModalRenderProvider` 内部。
5. RN 版本只从 `async-modal-render-native` 导入，不使用 Web 静态 `asyncModalRender()`。
