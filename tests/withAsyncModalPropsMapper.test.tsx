import { describe, it, expect } from 'vitest'
import React from 'react'
import { withAsyncModalPropsMapper, asyncModalRender } from '../dist'
import { page } from 'vitest/browser'

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
      <button data-testid="confirm-button" onClick={() => confirm('mapped-confirmed')}>Confirm</button>
      <button data-testid="close-button" onClick={() => close()}>Close</button>
    </div>
  )
}

describe('withAsyncModalPropsMapper', () => {
  it('should correctly map onOk and onCancel to custom prop names', async () => {
    // Map onOk -> confirm, onCancel -> close
    const MappedModal = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    
    const container = document.createElement('div')
    document.body.appendChild(container)
    
    const promise = asyncModalRender(MappedModal, { title: 'Mapped Modal' }, container)
    
    await expect.element(page.getByTestId('custom-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Mapped Modal')
    
    // Click the mapped confirm button
    await page.getByTestId('confirm-button').click()
    
    const result = await promise
    expect(result).toBe('mapped-confirmed')
    
    container.remove()
  })

  it('should return the same component reference for the same component and keys (caching)', () => {
    // First call
    const Mapped1 = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    // Second call with same arguments
    const Mapped2 = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    
    // Should be referentially equal
    expect(Mapped1).toBe(Mapped2)
  })

  it('should return different component references for different keys', () => {
    const Mapped1 = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    // Swap keys (semantically different mapping)
    // Note: In TS this might be invalid if keys don't match props, but runtime it works for cache check
    const Mapped2 = withAsyncModalPropsMapper(CustomModal, ['close', 'confirm'] as any)
    
    expect(Mapped1).not.toBe(Mapped2)
  })

  it('should return different component references for different components', () => {
    const OtherModal: React.FC<CustomModalProps> = (props) => <CustomModal {...props} />
    
    const Mapped1 = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    const Mapped2 = withAsyncModalPropsMapper(OtherModal, ['confirm', 'close'])
    
    expect(Mapped1).not.toBe(Mapped2)
  })
})
