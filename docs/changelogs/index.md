# 更新日志

## 0.0.5

`2026-01-27`

### 新增功能

- 支持弹窗持久化渲染（Persistence），通过 `persistent` 和 `openField` 配置实现，提升复杂交互场景下的性能
- 新增 `destroy` API，支持手动销毁指定的或全部持久化渲染的弹窗

### 类型系统优化

- 完善 `AsyncModalRenderOptions` 和 `AsyncModalDestroyOptions` 类型定义
- 增强 `AsyncModalContext` 类型，包含 `destroy` 方法，确保上下文调用的一致性
- 新增 `ExtractBooleanKeys` 工具类型，用于自动推导组件中可用于控制显隐的属性名

### 文档与测试

- 新增持久化渲染的详细 API 文档及使用示例
- 为持久化（Persistence）和销毁（Destroy）功能添加了完整的自动化测试用例，确保功能稳定性

## 0.0.4

`2026-01-23`

### 依赖与构建优化

- 修复 `dumijs2` React 版本与项目开发环境 React 版本类型冲突导致的文档构建失败问题
- 将项目 React 依赖版本调整为 `18.2.17` 以确保更好的兼容性
- 优化 `staticRender` 工具函数，提升在 React 18 环境下的稳定性

### 类型系统优化

- 优化 `AsyncModalRenderFactory` 的类型定义，通过泛型直接推导，提升在某些复杂场景下的类型推断准确度

## 0.0.3

`2026-01-23`

### 测试完善

- 为所有核心 API（`asyncModalRender`、`useAsyncModalRender`、`AsyncModalRenderContext`、`withAsyncModalPropsMapper`）添加了完整的自动化测试用例
- 使用 Vitest 浏览器模式进行真实环境测试，确保组件渲染与交互逻辑正确
- 覆盖了成功、取消、错误边界等多种业务场景

### 稳定性提升

- 修复了 `AsyncModalRenderContext` 在 Provider 外部调用时的错误边界处理逻辑
- 优化了测试环境下的 React 根节点挂载与卸载逻辑

## 0.0.2

`2026-01-23`

### 新增功能

- 新增 `withAsyncModalPropsMapper` 高阶函数，支持将业务组件的 props 映射为标准的 AsyncModalProps
- 新增 `types.ts` 统一管理类型定义，提供更好的类型推导支持

### 类型系统优化

- 导出 `ComputeAsyncModalProps` 类型，简化异步弹窗组件的类型定义
- 导出 `AsyncModalContext`、`AsyncModalRender`、`AsyncModalRenderFactory` 等核心类型
- 将 `AsyncModalRenderCancelError` 独立为单独的模块并导出

### 文档完善

- 新增 Props 转换使用示例和详细说明
- 完善所有 API 的 TypeScript 类型标注
- 更新安装说明，使用组件化的安装指令
- 为核心函数添加 JSDoc 注释

### 代码优化

- 统一代码风格，添加分号和格式化
- 修复文档示例中的语法错误

## 0.0.1

`2026-01-23`

### 初始发布

- 实现 `asyncModalRender` 函数，支持以 Promise 方式使用弹窗组件
- 实现 `useAsyncModalRender` Hook，支持在 React 组件中使用异步弹窗
- 实现 `AsyncModalRenderProvider` 和 `useAsyncModalRenderContext`，提供 Context 方式的集成
- 提供 `AsyncModalProps` 基础接口，定义弹窗组件的标准回调
- 实现 `AsyncModalRenderCancelError` 错误类，统一处理用户取消操作
- 支持三种使用方式：直接渲染、Hook 方式、Context 方式
- 完整的 TypeScript 类型支持
- 基础文档和示例
