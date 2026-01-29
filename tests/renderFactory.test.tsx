import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { useAsyncModalRender, AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  title: string
}

const TestModal: React.FC<TestModalProps> = ({ title, onOk }) => {
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="ok-button" onClick={() => onOk?.('confirmed')}>OK</button>
    </div>
  )
}

describe('renderFactory', () => {
  it('should create a reusable render function', async () => {
    const onSuccess = vi.fn()

    const App = () => {
      const { renderFactory, holder } = useAsyncModalRender()
      
      // Create the factory once
      const openModal = renderFactory(TestModal, { title: 'Factory Modal' })
      
      const handleOpen = async () => {
        const result = await openModal()
        onSuccess(result)
      }

      return (
        <div>
          <button data-testid="open-factory" onClick={handleOpen}>Open</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    
    // First open
    await page.getByTestId('open-factory').click()
    await expect.element(page.getByTestId('test-modal')).toBeVisible()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Factory Modal')
    await page.getByTestId('ok-button').click()
    await expect.poll(() => onSuccess.mock.calls.length).toBe(1)

    // Second open (same factory instance)
    await page.getByTestId('open-factory').click()
    await expect.element(page.getByTestId('test-modal')).toBeVisible()
    await page.getByTestId('ok-button').click()
    await expect.poll(() => onSuccess.mock.calls.length).toBe(2)
  })

  it('factory should support options', async () => {
    const onSuccess = vi.fn()

    const App = () => {
      const { renderFactory, holder } = useAsyncModalRender()
      
      // Factory with quiet option
      const openModal = renderFactory(TestModal, { title: 'Factory Quiet' }, { quiet: true })
      
      const handleOpen = async () => {
        const result = await openModal()
        onSuccess(result)
      }

      return (
        <div>
          <button data-testid="open-factory" onClick={handleOpen}>Open</button>
          {holder}
        </div>
      )
    }

    await render(<App />)
    
    await page.getByTestId('open-factory').click()
    
    // Check if it behaves quietly (e.g. we could cancel it, but here we just check it works)
    await page.getByTestId('ok-button').click()
    await expect.poll(() => onSuccess.mock.calls.length).toBe(1)
  })
})
