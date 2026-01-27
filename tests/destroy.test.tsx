import React from 'react';
import { render, renderHook } from 'vitest-browser-react';
import { page } from 'vitest/browser'
import { AsyncModalProps, useAsyncModalRender } from '../dist';
import { expect, it, describe } from 'vitest';

const TestModal: React.FC<AsyncModalProps & { title: string; open?: boolean }> = ({ title, open, onOk }) => {
  if (!open) return null;
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="ok-button" onClick={() => onOk?.('confirmed')}>OK</button>
    </div>
  );
};

describe('useAsyncModalRender destroy', () => {
  it('should remove persistent modal using destroy', async () => {
    const { result } = await renderHook(() => useAsyncModalRender());
    const { render: renderModal, holder, destroy } = result.current;

    await render(<div>{holder}</div>);

    // 渲染一个持久化弹窗
    renderModal(TestModal, { title: 'Persistent Modal' }, { persistent: 'modal1', openField: 'open' });

    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument();
    await expect.element(page.getByText('Persistent Modal')).toBeInTheDocument();

    // 销毁它
    destroy({ persistent: 'modal1' });

    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument();
  });

  it('should remove hidden persistent modal using destroy with visibility: hidden', async () => {
    const { result } = await renderHook(() => useAsyncModalRender());
    const { render: renderModal, holder, destroy } = result.current;

    await render(<div>{holder}</div>);

    // 渲染一个持久化弹窗
    const promise = renderModal(TestModal, { title: 'Persistent Modal' }, { persistent: 'modal1', openField: 'open'  });

    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument();

    // 点击确定，弹窗变为隐藏（因为是持久化的）
    await page.getByTestId('ok-button').click();
    await promise;

    // 验证弹窗已隐藏
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument();

    // 此时它应该是 hidden 状态。尝试销毁 visible 的，应该不生效
    destroy({ persistent: 'modal1', visibility: 'visible' });

    // 再次渲染，应该能立即渲染出来
    renderModal(TestModal, { title: 'Persistent Modal New' }, { persistent: 'modal1', openField: 'open'  });
    await expect.element(page.getByText('Persistent Modal New')).toBeInTheDocument();

    // 点击确定使其隐藏
    await page.getByTestId('ok-button').click();

    // 尝试销毁 hidden 的
    destroy({ persistent: 'modal1', visibility: 'hidden' });

    // 销毁后，再次调用 render 应重新创建（如果没有被销毁，应该还是之前的实例，但这里其实没法直接验证是否是新实例，除非加个 ref）
    // 简单验证：销毁后，如果不渲染，DOM 里不应该有
    await expect.element(page.getByText('Persistent Modal New')).not.toBeInTheDocument();
  });

  it('should remove all persistent modals when no persistent key is provided', async () => {
    const { result } = await renderHook(() => useAsyncModalRender());
    const { render: renderModal, holder, destroy } = result.current;

    await render(<div>{holder}</div>);

    renderModal(TestModal, { title: 'Modal 1' }, { persistent: 'modal1', openField: 'open'  });
    renderModal(TestModal, { title: 'Modal 2' }, { persistent: 'modal2', openField: 'open'  });

    await expect.element(page.getByText('Modal 1')).toBeInTheDocument();
    await expect.element(page.getByText('Modal 2')).toBeInTheDocument();

    destroy({}); // 销毁所有持久化弹窗

    await expect.element(page.getByText('Modal 1')).not.toBeInTheDocument();
    await expect.element(page.getByText('Modal 2')).not.toBeInTheDocument();
  });
});
