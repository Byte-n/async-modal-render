# Agent Skills

本项目在 `skills/` 目录下提供了可复用的 Skill，用于指导 AI Agent 在实现 async-modal-render 相关需求时，优先采用一致的决策路径和代码模式。

## 目录结构

```text
skills/
├── async-modal-render-best-practices/
│   ├── SKILL.md
│   └── references/
│       ├── api.md
│       └── examples.md
└── async-modal-component-guide/
    └── SKILL.md
```

## 已提供 Skill

### 1) async-modal-render-best-practices

- 目标：指导业务代码如何调用 async-modal-render。
- 适用场景：需要以 Promise 方式渲染弹窗，或在 Context / Hook / Static 三种模式中做选型。
- 主要内容：
  - 模式选型优先级：`Context > Hook > Static`
  - 渲染方法选型：`render` / `renderQuiet` / `renderPersistent`
  - 非标准弹窗适配：`withAsyncModalPropsMapper`
  - 持久化弹窗与销毁管理：`persistent`、`openField`、`destroy`
- 参考资料：
  - `skills/async-modal-render-best-practices/references/api.md`
  - `skills/async-modal-render-best-practices/references/examples.md`

### 2) async-modal-component-guide

- 目标：指导如何定义“符合 async-modal-render 规范”的弹窗组件。
- 适用场景：新建弹窗组件、改造已有弹窗组件、为持久化场景设计组件 props。
- 主要内容：
  - `AsyncModalProps` 规范（`onOk` / `onCancel`）
  - `onOk` 参数类型与 Promise 返回类型的对应关系
  - 通过 `withAsyncModalPropsMapper` 适配第三方或历史组件
  - 持久化场景的显隐字段设计（如 `open`）

## 推荐使用方式

1. 先判断任务是“调用层问题”还是“组件定义问题”。
2. 调用层问题优先使用 `async-modal-render-best-practices`。
3. 组件定义问题优先使用 `async-modal-component-guide`。
4. 涉及持久化、复杂流程时，可同时参考两个 Skill。
