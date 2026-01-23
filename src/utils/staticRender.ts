import * as React from 'react';
import * as ReactDom from 'react-dom';

/**
 * 安全地获取 createRoot 函数
 * 兼容处理：某些环境下从 'react-dom' 获取，某些需要从 'react-dom/client' 获取
 */
function getCreateRoot() {
  if (typeof (ReactDom as any).createRoot === 'function') {
    return (ReactDom as any).createRoot;
  }

  try {
    const client = require('react-dom/client');
    if (client && typeof client.createRoot === 'function') {
      return client.createRoot;
    }
  } catch (e) {
    // 忽略错误
  }

  return null;
}

const createRootFn = getCreateRoot();

/**
 * 挂载 React 元素到指定容器，并返回卸载函数
 */
export function staticRender(
  element: React.ReactElement,
  container: Element,
): () => void {

  if (createRootFn) {
    // React 18 & 19+ 逻辑
    const existingRoot = (container as any).__reactCompatRoot;
    let root;

    if (existingRoot) {
      root = existingRoot;
    } else {
      root = createRootFn(container);
      (container as any).__reactCompatRoot = root;
    }

    root.render(element);

    return () => {
      // 这里的清理逻辑需要防抖或微任务化，防止 React 18 内部渲染冲突
      // 简单实现：
      if ((container as any).__reactCompatRoot === root) {
        root.unmount();
        delete (container as any).__reactCompatRoot;
      }
    };
  } else {
    // React 16/17 逻辑
    // React 19 已经彻底删除了 ReactDom.render
    const legacyRender = (ReactDom as any).render;
    if (typeof legacyRender === 'function') {
      legacyRender(element, container);
      return () => {
        (ReactDom as any).unmountComponentAtNode(container);
      };
    } else {
      throw new Error('当前 React 版本不支持 render 或 createRoot，请检查依赖。');
    }
  }
}
