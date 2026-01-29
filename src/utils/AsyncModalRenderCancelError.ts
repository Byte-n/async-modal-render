/**
 * 用户取消操作时抛出的错误
 * 当用户触发 onCancel 且未传递错误对象时，Promise 会 reject 此类型的错误
 */
export class AsyncModalRenderCancelError extends Error {
  constructor() {
    super('User cancel');
  }
}
