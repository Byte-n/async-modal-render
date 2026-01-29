import { defineConfig } from 'dumi'
import { defineThemeConfig } from '@byte.n/dumi-theme-antd/dist/defineThemeConfig'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/async-modal-render/' : '/',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/async-modal-render/' : '/',
  themeConfig: defineThemeConfig({
    name: 'async-modal-render',
    title: 'async-modal-render',
    lastUpdated: true,
    homeDocMode: 'ger-doc',
    bannerConfig: {
      showBanner: false,
    },
    nav: [
      { title: '快速开始', link: '/guide' },
      { title: '使用手册', link: '/components' },
      { title: 'API', link: '/api' },
      { title: '更新日志', link: '/changelogs' },
    ],
    footer:
      'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>Byte-n | Copyright © 2025-present</span>',
    github: 'https://github.com/Byte-n/async-modal-render',
    // sidebarGroupModePath: ['/config', '/guide'],
    description: '一个将 React 模态框操作 Promise 化的轻量级工具库，支持 async/await 语法，让异步交互代码更简洁优雅',
    actions: [
      {
        type: 'primary',
        text: '快速开始',
        link: '/guide',
      },
      {
        text: '使用手册',
        link: '/components',
      },
      {
        text: 'API',
        link: '/api',
      },
      {
        text: '更新日志',
        link: '/changelogs',
      },
    ],
    features: [
      {
        title: 'Promise 化',
        details: '将模态框交互转换为 Promise，支持 async/await 语法，让异步交互代码更简洁优雅',
      },
      {
        title: 'TypeScript',
        details: '使用 TypeScript 编写，提供完整的类型定义和智能提示',
      },
      {
        title: '多种用法',
        details: '支持函数式调用、Hook 和 Context 三种使用方式，适应不同场景需求',
      },
      {
        title: '轻量零依赖',
        details: '核心代码精简，无运行时依赖，不增加项目体积负担',
      },
      {
        title: 'React 16+',
        details: '支持 React 16+ 版本，完美兼容 Hook 和现代 React 特性',
      },
      {
        title: '自动化测试',
        details: '包含 30+ 个 Vitest 浏览器模式测试用例，全方位覆盖 Hook、Context、HOC、持久化及静默模式等核心场景，确保库的稳定性',
      },
      {
        title: '灵活组件化',
        details: '可将任意 React 组件转换为异步模态框，高度灵活可定制',
      },
    ],
    loading: {
      skeleton: ['/index', '/guide', '/components'],
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true,
          },
          {
            title: 'Umi',
            description: 'React 应用开发框架',
            url: 'https://umijs.org',
            openExternal: true,
          },
          {
            title: '@byte.n/dumi-theme-antd',
            description: 'dumi Antd主图',
            url: 'https://github.com/Byte-n/dumi-theme-antd',
            openExternal: true,
          },
        ],
      },
    ],
  }),
});
