import { describe, it, expect } from 'vitest'
import React, { useState } from 'react'
import { withAsyncModalPropsMapper, useAsyncModalRender, PersistentComponentConflictError } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface CustomModalProps {
  visible?: boolean
  title: string
  confirm: (data: string) => void
  close: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ title, confirm, close }) => {
  return (
    <div data-testid="custom-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="confirm-button" onClick={() => confirm('confirmed')}>Confirm</button>
      <button data-testid="close-button" onClick={() => close()}>Close</button>
    </div>
  )
}

describe('PersistentComponentConflictError', () => {
  it('should throw PersistentComponentConflictError when mixing original and mapped components with same persistent key', async () => {
    const App = () => {
      const { render, holder } = useAsyncModalRender()
      const [errorMsg, setErrorMsg] = useState('')

      const handleConflict = async () => {
        try {
          // First open: Original component
          // Note: We need to cast or ensure it fits AsyncModalProps, but for conflict test it matters that component ref is different
          // @ts-ignore - for test purpose
          render(CustomModal, { title: 'Original' }, { persistent: 'conflict-key', openField: 'visible' })
          
          // Wait a bit to ensure it's mounted
          await new Promise(r => {setTimeout(r, 100)})
          
          // Second open: Mapped component -> Should throw
          const MappedModal = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
          await render(MappedModal, { title: 'Mapped' }, { persistent: 'conflict-key', openField: 'visible' })
        } catch (e) {
          if (e instanceof PersistentComponentConflictError) {
            setErrorMsg(e.message)
          } else {
            console.error(e)
            setErrorMsg('Unknown error')
          }
        }
      }

      return (
        <div>
          <button data-testid="trigger-conflict" onClick={handleConflict}>Trigger Conflict</button>
          <div data-testid="error-message">{errorMsg}</div>
          {holder}
        </div>
      )
    }

    await render(<App />)
    
    // Trigger the conflict flow
    await page.getByTestId('trigger-conflict').click()
    
    // We need to close the first modal to proceed in the real flow, but here the second render happens immediately in the same function
    // Wait for the error to appear
    await expect.element(page.getByTestId('error-message')).toHaveTextContent(/Persistent key "conflict-key" is already in use/)
  })
})
