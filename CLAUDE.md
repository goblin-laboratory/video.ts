# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 语言规则

- 所有对话、代码注释、文档都必须使用中文

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview

# 运行测试
pnpm test

# 监听模式运行测试
pnpm test:watch

# 代码检查并自动修复
pnpm run check

# 代码格式化
pnpm run format

# 启动 Storybook
pnpm run storybook

# 构建 Storybook
pnpm run build-storybook
```

## 项目架构

这是一个 React 视频播放器组件库（rplayer），采用分层架构设计：

### 核心组件

**ReactjsPlayer** (`src/components/ReactjsPlayer/`) - 播放器核心
- 基于 Kernel 抽象层，支持多种播放协议
- 通过 Context 提供视频状态和引用
- 使用 hooks 管理视频事件和状态

**Kernel 系统** (`src/components/ReactjsPlayer/kernels/`) - 播放内核
- `Kernel.ts` - 抽象基类，定义加载和清理接口
- `Registry.ts` - 单例注册表，管理可用内核
- `Factory.tsx` - 内核工厂，根据名称创建内核实例
- 支持的内核：
  - `NativeKernel` - 原生 HTML5 视频
  - `HlsjsKernel` - HLS 流媒体 (hls.js)
  - `MpegtsKernel` - MPEG-TS 流媒体 (mpegts.js)
  - `SRSWebRTCKernel` - SRS WebRTC 流媒体

**PlayerSkin** (`src/components/PlayerSkin/`) - 播放器皮肤
- 分为两种模式：直播 (Live) 和回放 (Playback)
- `PlayerSkin.tsx` - 统一入口，根据模式选择皮肤
- `LivePlayerSkin` / `LivePlayerBar` - 直播模式界面
- `PlaybackPlayerSkin` / `PlaybackPlayerBar` - 回放模式界面
- 包含播放控制、音量、全屏、进度条等功能

### 技术栈

- React 19
- TypeScript
- Rsbuild (构建工具)
- Biome (代码格式化 & Lint)
- rstest (测试)
- Storybook (组件文档)
- Ant Design (UI 组件库)
- ahooks (React Hooks 库)

## 代码风格

- 使用单引号 (`'`) 而非双引号
- 使用空格缩进
- 导入自动排序
- 使用 Biome 进行代码检查和格式化，运行 `pnpm run check` 自动修复
