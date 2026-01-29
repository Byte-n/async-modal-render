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

describe('renderPersistent', () => {
  it('renderPersistent should keep modal in DOM', async () => {
    const App = () => {
      const { renderPersistent, holder } = useAsyncModalRender();
      return (
        <div>
          <button 
            data-testid="open-button" 
            onClick={() => renderPersistent(PersistentModal, { title: 'Persistent' }, { persistent: 'p-key', openField: 'open' })}
          >
            Open
          </button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    // Open
    await page.getByTestId('open-button').click();
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible();

    // Close
    await page.getByTestId('ok-button').click();

    // Should still be in DOM
    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument();
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible();
  });

  it('renderFactoryPersistent should create a persistent renderer', async () => {
    const App = () => {
      const { renderFactoryPersistent, holder } = useAsyncModalRender();
      const openModal = renderFactoryPersistent(PersistentModal, { title: 'Factory Persistent' }, { persistent: 'fp-key', openField: 'open' });
      
      return (
        <div>
          <button data-testid="open-factory" onClick={openModal}>
            Open Factory
          </button>
          {holder}
        </div>
      );
    };

    await render(<App />);

    // 1. Open and increment
    await page.getByTestId('open-factory').click();
    await page.getByTestId('increment-button').click();
    await expect.element(page.getByTestId('count-value')).toHaveTextContent('1');

    // 2. Close
    await page.getByTestId('ok-button').click();
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible();

    // 3. Re-open
    await page.getByTestId('open-factory').click();
    
    // 4. State should be preserved
    await expect.element(page.getByTestId('count-value')).toHaveTextContent('1');
  });
});
