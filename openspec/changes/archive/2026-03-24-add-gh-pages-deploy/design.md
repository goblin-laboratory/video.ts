## Context

当前项目使用 rsbuild 作为构建工具，构建产物输出到 `dist` 目录。项目没有自动化部署流程，需要手动将构建产物推送到 GitHub Pages。

## Goals / Non-Goals

**Goals:**
- 提供一键部署命令 `pnpm deploy`
- 自动在部署前执行构建（predeploy）
- 使用 gh-pages 库简化部署流程

**Non-Goals:**
- 不涉及 CI/CD 自动化部署（仅本地手动部署）
- 不修改构建配置（使用现有的 rsbuild 配置）

## Decisions

### 1. 使用 gh-pages 库
- **选择**: 使用 `gh-pages` npm 包
- **原因**: 成熟稳定，广泛使用，自动处理 git 分支操作
- **替代方案**: 手动 git 操作，复杂且容易出错

### 2. 脚本命名
- **选择**: `predeploy` 和 `deploy`
- **原因**: npm 生命周期脚本约定，`predeploy` 会在 `deploy` 前自动执行
- **替代方案**: 自定义脚本名称，需要手动串联执行

### 3. 部署目录
- **选择**: 使用 `dist` 目录（rsbuild 默认输出目录）
- **原因**: 无需修改现有构建配置
- **替代方案**: 修改输出目录，增加不必要的配置变更

## Risks / Trade-offs

- **风险**: gh-pages 需要本地 git 配置正确
  - **缓解**: 提供使用说明，确保用户已配置 git 并有权限推送到仓库
- **风险**: 部署前可能忘记提交代码
  - **缓解**: gh-pages 默认不会部署未提交的更改，但建议在干净的工作区执行
