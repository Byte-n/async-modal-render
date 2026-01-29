# 更新日志

## 0.1.1

`2026-01-29`

### 新增特性

- **持久化弹窗 (Persistent Modals)**: 新增 `renderPersistent` 和 `renderPersistentFactory` API。支持弹窗在关闭时仅隐藏而不销毁，从而保留内部状态（如表单输入、Tab 选中态等）。
- **静默模式 (Quiet Mode)**: 新增 `renderQuiet` 和 `renderQuietFactory` API。当用户取消/关闭弹窗时，不再抛出 `AsyncModalRenderCancelError`，而是 resolve `undefined`，简化了简单的确认/取消流程处理。
- **Context 销毁策略**: `useAsyncModalRenderContext` 的渲染选项新增 `destroyStrategy` 属性。
  - `hook`: 跟随当前组件卸载而自动销毁弹窗（防止内存泄漏）。
  - `context` (默认): 弹窗生命周期与 `AsyncModalRenderProvider` 绑定，不随调用组件卸载而销毁。

### 优化

- **持久化冲突检测**: 在 `useAsyncModalRender` 中增加了安全检查，当尝试使用相同的 `persistent` Key 渲染不同组件时，会抛出 `PersistentComponentConflictError`，防止因组件引用变化导致的 React 状态意外重置。
- **Props 映射器缓存**: 优化 `withAsyncModalPropsMapper` 高阶组件，实现了基于组件引用和映射 Key 的缓存机制，避免生成重复的包装组件，减少不必要的 React 渲染。

## 0.0.7

`2026-01-28`

### 修复

- **核心修复**：修复持久化弹窗状态丢失的问题。通过重构 `ElementsHolder` 中的 `key` 生成策略，使用随机唯一标识符替换原有的递增 ID，彻底解决了在持久化渲染场景下因 Key 冲突导致的组件状态重置或丢失 bug。

### 优化

- 优化 `asyncModalRenderImp` 实现，移除冗余的 Key 属性传递，减少对业务组件的潜在副作用。
- 增强 React 版本兼容性，改进 `staticRender` 工具函数以更好地支持 React 19+ 环境。
- 完善测试覆盖率，新增多弹窗并发渲染时的 Key 唯一性校验测试。
- 工程化升级：统一配置文件格式为 `.cjs`，优化构建配置。
- 优化使用手册示例

## 0.0.6

`2026-01-27`

### 修复

- 修复 `asyncModalRenderImp` 中组件 `key` 冲突的潜在 Bug，确保每个弹窗实例拥有唯一的 React Key

### 文档

- 深度优化 `VS` 对比文档，提供更精确的竞品分析（对比 NiceModal）及更丰富的代码示例
- 完善 `renderFactory` 和 `async/await` 调用的最佳实践说明

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
