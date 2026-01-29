import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { useAsyncModalRender, AsyncModalRenderCancelError } from '../dist'
import type { AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  title: string
}

const TestModal: React.FC<TestModalProps> = ({ title, onOk, onCancel }) => {
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="ok-button" onClick={() => onOk?.('confirmed')}>OK</button>
      <button data-testid="cancel-button" onClick={() => onCancel?.()}>Cancel</button>
    </div>
  )
}

describe('renderQuiet', () => {
  it('should not throw error on cancel when using renderQuiet', async () => {
    const onSuccess = vi.fn()
    const onError = vi.fn()

    const App = () => {
      const { renderQuiet, holder } = useAsyncModalRender()
      
      const handleOpen = async () => {
        try {
          const result = await renderQuiet(TestModal, { title: 'Quiet Modal' })
          onSuccess(result)
        } catch (e) {
          onError(e)
        }
      }

      return (
        <div>
          <button data-testid="open-modal" onClick={handleOpen}>Open</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    
    await page.getByTestId('open-modal').click()
    await expect.element(page.getByTestId('test-modal')).toBeVisible()
    
    // Click Cancel
    await page.getByTestId('cancel-button').click()
    
    // Should resolve with undefined, not throw
    await expect.poll(() => onSuccess.mock.calls.length).toBe(1)
    expect(onSuccess).toHaveBeenCalledWith(undefined)
    expect(onError).not.toHaveBeenCalled()
  })

  it('should resolve with value on OK when using renderQuiet', async () => {
    const onSuccess = vi.fn()

    const App = () => {
      const { renderQuiet, holder } = useAsyncModalRender()
      
      const handleOpen = async () => {
        const result = await renderQuiet(TestModal, { title: 'Quiet Modal' })
        onSuccess(result)
      }

      return (
        <div>
          <button data-testid="open-modal" onClick={handleOpen}>Open</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    
    await page.getByTestId('open-modal').click()
    await page.getByTestId('ok-button').click()
    
    await expect.poll(() => onSuccess.mock.calls.length).toBe(1)
    expect(onSuccess).toHaveBeenCalledWith('confirmed')
  })

  it('renderQuietFactory should create a quiet renderer', async () => {
    const onSuccess = vi.fn()
    const onError = vi.fn()

    const App = () => {
      const { renderQuietFactory, holder } = useAsyncModalRender()
      const openModal = renderQuietFactory(TestModal, { title: 'Factory Quiet' })
      
      const handleOpen = async () => {
        try {
          const result = await openModal()
          onSuccess(result)
        } catch (e) {
          onError(e)
        }
      }

      return (
        <div>
          <button data-testid="open-factory" onClick={handleOpen}>Open Factory</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    await page.getByTestId('open-factory').click()
    await expect.element(page.getByTestId('test-modal')).toBeVisible()
    
    await page.getByTestId('cancel-button').click()
    
    await expect.poll(() => onSuccess.mock.calls.length).toBe(1)
    expect(onSuccess).toHaveBeenCalledWith(undefined)
    expect(onError).not.toHaveBeenCalled()
  })
  
  it('normal render should throw on cancel', async () => {
    const onSuccess = vi.fn()
    const onError = vi.fn()

    const App = () => {
      const { render, holder } = useAsyncModalRender()
      
      const handleOpen = async () => {
        try {
          await render(TestModal, { title: 'Normal Modal' })
          onSuccess()
        } catch (e) {
          onError(e)
        }
      }

      return (
        <div>
          <button data-testid="open-normal" onClick={handleOpen}>Open Normal</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    await page.getByTestId('open-normal').click()
    await page.getByTestId('cancel-button').click()
    
    await expect.poll(() => onError.mock.calls.length).toBe(1)
    expect(onError).toHaveBeenCalledWith(expect.any(AsyncModalRenderCancelError))
    expect(onSuccess).not.toHaveBeenCalled()
  })
})
