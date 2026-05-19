import * as entry from '../src';

describe('entrypoints', () => {
  it('exports React Native supported APIs only', () => {
    expect(entry).not.toHaveProperty('asyncModalRender');
    expect(entry.useAsyncModalRender).toEqual(expect.any(Function));
    expect(entry.AsyncModalRenderProvider).toBeTruthy();
    expect(entry.useAsyncModalRenderContext).toEqual(expect.any(Function));
    expect(entry.AsyncModalRenderCancelError).toEqual(expect.any(Function));
    expect(entry.PersistentComponentConflictError).toEqual(expect.any(Function));
    expect(entry.withAsyncModalPropsMapper).toEqual(expect.any(Function));
  });
});
