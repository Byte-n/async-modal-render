import { describe, it, expect } from 'vitest'
import React, { useState } from 'react'
import { useAsyncModalRender, AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface PersistentModalProps extends AsyncModalProps {
  open?: boolean;
  title: string;
}

const PersistentModal: React.FC<PersistentModalProps> = ({ open, title, onOk, onCancel }) => {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="persistent-modal" style={{ display: open ? 'block' : 'none' }}>
      <h1 data-testid="modal-title">{title}</h1>
      <p data-testid="count-value">{count}</p>
      <button data-testid="increment-button" onClick={() => setCount(c => c + 1)}>Increment</button>
      <button data-testid="ok-button" onClick={() => onOk?.(count)}>OK</button>
      <button data-testid="cancel-button" onClick={() => onCancel?.()}>Cancel</button>
    </div>
  );
};

describe('Persistence', () => {
  it('should keep the modal in DOM when persistent is enabled', async () => {
    const App = () => {
      const { render, holder } = useAsyncModalRender();
      return (
        <div>
          <button data-testid="open-button" onClick={() => render(PersistentModal, { title: 'Persistent' }, { persistent: 'test-key', openField: 'open' })}>
            Open
          </button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    // Open modal
    await page.getByTestId('open-button').click();
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible();

    // Close modal via OK
    await page.getByTestId('ok-button').click();

    // Modal should still be in DOM but hidden
    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument();
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible();
  });

  it('should preserve internal state when re-opening a persistent modal', async () => {
    const App = () => {
      const { render, holder } = useAsyncModalRender();
      return (
        <div>
          <button data-testid="open-button" onClick={() => render(PersistentModal, { title: 'Persistent' }, { persistent: 'test-key', openField: 'open' })}>
            Open
          </button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    // 1. Open and increment
    await page.getByTestId('open-button').click();
    await page.getByTestId('increment-button').click();
    await expect.element(page.getByTestId('count-value')).toHaveTextContent('1');

    // 2. Close
    await page.getByTestId('ok-button').click();
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible();

    // 3. Re-open
    await page.getByTestId('open-button').click();
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible();

    // 4. Check state is preserved
    await expect.element(page.getByTestId('count-value')).toHaveTextContent('1');
  });

  it('should use custom openField if provided', async () => {
    interface CustomModalProps extends AsyncModalProps {
      visible?: boolean;
    }
    const CustomModal: React.FC<CustomModalProps> = ({ visible, onOk }) => (
      <div data-testid="custom-modal" style={{ display: visible ? 'block' : 'none' }}>
        <button data-testid="ok-button" onClick={() => onOk?.()}>OK</button>
      </div>
    );

    const App = () => {
      const { render, holder } = useAsyncModalRender();
      return (
        <div>
          <button data-testid="open-button" onClick={() => render(CustomModal, {}, { persistent: 'custom-key', openField: 'visible' })}>
            Open
          </button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    await page.getByTestId('open-button').click();
    await expect.element(page.getByTestId('custom-modal')).toBeVisible();

    await page.getByTestId('ok-button').click();
    await expect.element(page.getByTestId('custom-modal')).toBeInTheDocument();
    await expect.element(page.getByTestId('custom-modal')).not.toBeVisible();
  });

  it('should handle multiple persistent modals with different keys', async () => {
    const App = () => {
      const { render, holder } = useAsyncModalRender();
      return (
        <div>
          <button data-testid="open-1" onClick={() => render(PersistentModal, { title: 'Modal 1' }, { persistent: 'key-1', openField: 'open' })}>Open 1</button>
          <button data-testid="open-2" onClick={() => render(PersistentModal, { title: 'Modal 2' }, { persistent: 'key-2', openField: 'open' })}>Open 2</button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    await page.getByTestId('open-1').click();
    const modal1 = page.getByTestId('persistent-modal').filter({ hasText: 'Modal 1' });
    await modal1.getByTestId('increment-button').click(); // count = 1
    await modal1.getByTestId('ok-button').click(); // close 1

    await page.getByTestId('open-2').click();
    const modal2 = page.getByTestId('persistent-modal').filter({ hasText: 'Modal 2' });
    await expect.element(modal2.getByTestId('count-value')).toHaveTextContent('0'); // Modal 2 count should be 0
    await modal2.getByTestId('increment-button').click();
    await modal2.getByTestId('increment-button').click(); // count = 2
    await modal2.getByTestId('ok-button').click(); // close 2

    await page.getByTestId('open-1').click();
    await expect.element(modal1.getByTestId('count-value')).toHaveTextContent('1'); // Modal 1 count should still be 1
  });
});
