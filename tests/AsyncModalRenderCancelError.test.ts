import { AsyncModalRenderCancelError } from '../src'

describe('AsyncModalRenderCancelError', () => {
  it('message 应为 "User cancel"', () => {
    const err = new AsyncModalRenderCancelError()
    expect(err.message).toBe('User cancel')
  })

  it('实例应为 Error 且 name 默认为 "Error"', () => {
    const err = new AsyncModalRenderCancelError()
    expect(err).toBeInstanceOf(Error)
    expect(err.name).toBe('Error')
  })
})
