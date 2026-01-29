/**
 * 当使用相同的 persistent key 但不同的组件构造器时抛出的错误
 * 这会导致 React 状态丢失，因为 React 的 diff 算法会认为这是不同的组件
 */
export class PersistentComponentConflictError extends Error {
  constructor(public persistentKey: string | symbol | number) {
    super(
      `[async-modal-render] Persistent key "${String(persistentKey)}" is already in use by a different component. ` +
      `Using different components with the same persistent key will cause React state to be lost. ` +
      `Please use a different persistent key or destroy the existing modal first.`
    );
    this.name = 'PersistentComponentConflictError';
  }
}