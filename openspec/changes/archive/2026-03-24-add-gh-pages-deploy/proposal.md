## Why

项目需要一个便捷的方式将构建产物部署到 GitHub Pages，以便展示播放器组件的示例和文档。目前没有自动化部署流程，每次需要手动操作。

## What Changes

- 安装 `gh-pages` 依赖包
- 添加 `predeploy` 脚本，在部署前自动执行构建
- 添加 `deploy` 脚本，使用 gh-pages 将构建产物推送到 gh-pages 分支
- 可能需要配置 rsbuild 的输出目录（如需要）

## Capabilities

### New Capabilities

- `gh-pages-deploy`: 提供自动化的 GitHub Pages 部署能力

### Modified Capabilities

（无）

## Impact

- 影响 `package.json`：添加新的 scripts 和依赖
- 新增 `gh-pages` 作为开发依赖
- 需要配置 rsbuild 输出目录为 `dist`（默认已是）
