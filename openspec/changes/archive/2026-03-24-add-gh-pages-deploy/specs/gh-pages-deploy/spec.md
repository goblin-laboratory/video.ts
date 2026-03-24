## ADDED Requirements

### Requirement: Deploy command
项目 SHALL 提供 `deploy` 命令，用于将构建产物部署到 GitHub Pages。

#### Scenario: Run deploy command
- **WHEN** 用户执行 `pnpm deploy`
- **THEN** 系统自动执行 `predeploy` 脚本
- **THEN** 系统将构建产物推送到 gh-pages 分支

### Requirement: Pre-deploy script
项目 SHALL 提供 `predeploy` 脚本，在部署前自动执行构建。

#### Scenario: Pre-deploy runs build
- **WHEN** `predeploy` 脚本被执行
- **THEN** 系统运行 `build` 命令生成最新构建产物

### Requirement: gh-pages dependency
项目 SHALL 添加 `gh-pages` 作为开发依赖。

#### Scenario: gh-pages installed
- **WHEN** 用户执行 `pnpm install`
- **THEN** `gh-pages` 包被安装到 node_modules
