# video.ts

一个功能强大的 React 视频播放器组件库，支持多种流媒体协议。

## 功能特性

- 🎬 支持多种播放内核
  - 原生 HTML5 视频
  - HLS 流媒体 (hls.js)
  - MPEG-TS 流媒体 (mpegts.js)
  - SRS WebRTC 流媒体

- 🎮 两种播放模式
  - 直播模式
  - 回放模式

- 🎨 精美的 UI 设计
  - 现代化深色主题
  - 流畅的动画效果
  - 响应式布局

## 技术栈

- React 19
- TypeScript
- Rsbuild
- Ant Design
- hls.js
- mpegts.js

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看播放器演示。

### 构建生产版本

```bash
pnpm run build
```

### 预览生产构建

```bash
pnpm run preview
```

### 运行测试

```bash
pnpm test
```

### 监听模式运行测试

```bash
pnpm test:watch
```

### 代码检查并自动修复

```bash
pnpm run check
```

### 代码格式化

```bash
pnpm run format
```

### 启动 Storybook

```bash
pnpm run storybook
```

## 项目架构

### 核心组件

- **ReactjsPlayer** - 播放器核心，基于 Kernel 抽象层
- **Kernel 系统** - 播放内核抽象，支持多种协议
- **PlayerSkin** - 播放器皮肤，分为直播和回放两种模式

### 目录结构

```
src/
├── components/
│   ├── ReactjsPlayer/    # 播放器核心
│   │   └── kernels/      # 播放内核
│   └── PlayerSkin/       # 播放器皮肤
└── App.tsx               # 演示应用
```

## 提交规范

本项目使用 commitlint 规范 git 提交信息，格式如下：

```
<type>(<scope>): <subject>
```

常用 type：
- `feat` - 新功能
- `fix` - 修复 bug
- `docs` - 文档更新
- `style` - 代码格式调整
- `refactor` - 重构
- `test` - 测试相关
- `chore` - 构建/工具相关

## License

MIT
