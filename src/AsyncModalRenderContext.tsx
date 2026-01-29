import React, { memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { AsyncModalContext, UseAsyncModalRenderReturn } from './types';
import { useAsyncModalRender } from './useAsyncModalRender';

const DEFAULT_FUNC = () => {
  throw Error(`AsyncModalContext must be used within createRoot.`);
};

export const AsyncModalRenderContext = React.createContext<Omit<UseAsyncModalRenderReturn, 'holder'>>({
  render: DEFAULT_FUNC,
  renderFactory: DEFAULT_FUNC,
  destroy: DEFAULT_FUNC,
  renderQuiet: DEFAULT_FUNC,
  renderPersistentFactory: DEFAULT_FUNC,
  renderPersistent: DEFAULT_FUNC,
  renderQuietFactory: DEFAULT_FUNC,
});

/**
 * AsyncModalRenderProvider 组件
 * 为子组件提供 useAsyncModalRenderContext 的上下文环境
 *
 * @param children 子组件
 */
export const AsyncModalRenderProvider = memo(({ children }: { children: React.ReactNode }) => {
  const {
    render,
    renderFactory,
    holder,
    destroy,
    renderPersistentFactory,
    renderPersistent,
    renderQuietFactory,
    renderQuiet,
  } = useAsyncModalRender();
  const value = useMemo(
    () => ({
      render,
      renderFactory,
      destroy,
      renderPersistentFactory,
      renderPersistent,
      renderQuietFactory,
      renderQuiet,
    }),
    [render, renderFactory, destroy, renderPersistentFactory, renderPersistent, renderQuietFactory, renderQuiet],
  );
  return (
    <AsyncModalRenderContext.Provider value={value}>
      {children}
      {holder}
    </AsyncModalRenderContext.Provider>
  );
});

/**
 * 获取 AsyncModalRenderContext
 * 必须在 AsyncModalRenderProvider 内部使用
 *
 * @returns {AsyncModalContext} 返回 context 对象，包含 render, renderFactory 等方法
 */
export function useAsyncModalRenderContext(): AsyncModalContext {
  const { render, renderFactory, destroy, renderPersistentFactory, renderQuiet, renderPersistent, renderQuietFactory } = useContext(AsyncModalRenderContext);

  // 优化1：使用 Set 替代数组，提升删除性能
  const unmountCallbacks = useRef<Set<VoidFunction>>(new Set());

  // 包装 destroyModal，添加防重复和自动清理逻辑
  const wrapDestroyModal = useCallback(<T extends { destroyModal: VoidFunction }>(promise: T) => {
    const originalDestroy = promise.destroyModal;

    let isDestroyed = false;
    const wrappedDestroy = () => {
      if (isDestroyed) return; // 防止重复销毁
      isDestroyed = true;
      originalDestroy();
      unmountCallbacks.current.delete(wrappedDestroy); // 自动从集合中移除
    };

    unmountCallbacks.current.add(wrappedDestroy);
    promise.destroyModal = wrappedDestroy;
  }, []);

  // 工具函数：包装 render 类型的函数（返回 Promise & { destroyModal }）
  const wrapRenderFunction = useCallback(
    <Fn extends (...args: any[]) => any>(fn: Fn) => {
      return ((...args: Parameters<Fn>) => {
        const options = args[2];
        if (!options) {
          return fn(...args);
        }

        const promise = fn(...args);
        if (options.destroyStrategy === 'hook') {
          wrapDestroyModal(promise);
        }
        return promise;
      }) as Fn;
    },
    [wrapDestroyModal],
  );

  // 工具函数：包装 factory 类型的函数（返回 RenderFactory）
  const wrapFactoryFunction = useCallback(
    <Fn extends (...args: any[]) => any>(fn: Fn) => {
      return ((...args: Parameters<Fn>) => {
        const options = args[2];
        if (!options) {
          return fn(...args);
        }

        const factory = fn(...args);
        if (options.destroyStrategy === 'hook') {
          wrapDestroyModal(factory);
        }
        return factory;
      }) as Fn;
    },
    [wrapDestroyModal],
  );

  const realRender = useCallback<AsyncModalContext['render']>(
    wrapRenderFunction(render),
    [render, wrapRenderFunction],
  );

  const realRenderPersistent = useCallback<AsyncModalContext['renderPersistent']>(
    wrapRenderFunction(renderPersistent),
    [renderPersistent, wrapRenderFunction],
  );

  const realRenderQuiet = useCallback<AsyncModalContext['renderQuiet']>(
    wrapRenderFunction(renderQuiet),
    [renderQuiet, wrapRenderFunction],
  );

  const realRenderFactory = useCallback<AsyncModalContext['renderFactory']>(
    wrapFactoryFunction(renderFactory),
    [renderFactory, wrapFactoryFunction],
  );

  const realRenderFactoryPersistent = useCallback<AsyncModalContext['renderPersistentFactory']>(
    wrapFactoryFunction(renderPersistentFactory),
    [renderPersistentFactory, wrapFactoryFunction],
  );

  const realRenderFactoryQuiet = useCallback<AsyncModalContext['renderQuietFactory']>(
    wrapFactoryFunction(renderQuietFactory),
    [renderQuietFactory, wrapFactoryFunction],
  );

  useEffect(() => {
    return () => {
      unmountCallbacks.current.forEach((v) => v());
      unmountCallbacks.current.clear();
    };
  }, []);

  return {
    render: realRender,
    renderFactory: realRenderFactory,
    renderPersistent: realRenderPersistent,
    renderQuiet: realRenderQuiet,
    renderPersistentFactory: realRenderFactoryPersistent,
    renderQuietFactory: realRenderFactoryQuiet,
    destroy,
  };
}
