## Context

当前项目是一个 React 视频播放器组件库 (rplayer)，具有分层架构：
- ReactjsPlayer 核心组件提供视频状态和 Context
- Kernel 系统支持多种流媒体协议
- PlayerSkin 分为 Live 和 Playback 两种模式

当前需要修复的问题分散在 LivePlayerBar 和 PlaybackPlayerBar 组件中，以及需要新增快捷键和中央播放按钮功能。

## Goals / Non-Goals

**Goals:**
- 统一直播和回放模式的 UI 风格
- 完善直播模式功能（音量调节）
- 优化回放模式视觉效果（YouTube 风格进度条）
- 增加暂停时的中央播放按钮提示
- 实现键盘快捷键支持

**Non-Goals:**
- 不修改 Kernel 内核系统
- 不改变核心 Context API
- 不引入新的第三方依赖

## Decisions

### 1. 图标选择
- **决定**: 直播暂停图标使用 `PlayOutlined`（无圆圈三角），暂停使用 `PauseOutlined`
- **原因**: 保持与需求一致，简洁风格
- **替代方案**: 继续使用 `PlayCircleOutlined` - 但不符合需求

### 2. 音量控制实现
- **决定**: 直接启用 LivePlayerBar 中已注释的音量控制代码
- **原因**: 代码已存在且功能完整，无需重写
- **替代方案**: 重写音量控制 - 不必要的重复工作

### 3. YouTube 风格进度条
- **决定**: 通过 Ant Design Slider 的 trackStyle、handleStyle 等属性自定义颜色
- **原因**: 无需额外组件，利用现有 Ant Design 能力
- **颜色方案**: 进度条激活色 #FF0000 (YouTube 红)，手柄白色
- **替代方案**: 自定义 Slider 组件 - 增加复杂度

### 4. 中央播放按钮
- **决定**: 创建新组件 `CenterPlayButton`，使用 SkinCenter 布局，监听 paused 状态显示
- **原因**: 复用现有 SkinCenter，逻辑清晰
- **替代方案**: 内联在每个 Skin 中 - 代码重复

### 5. 键盘快捷键
- **决定**: 创建 `useKeyboardShortcuts` hook，在 ReactjsPlayer 或 PlayerSkin 中使用
- **原因**: Hook 方式复用性好，不侵入现有组件
- **快捷键映射**:
  - 空格: 暂停/播放
  - 左箭头: 后退 5 秒
  - 右箭头: 前进 5 秒
  - 上箭头: 音量 +10%
  - 下箭头: 音量 -10%
  - M: 静音切换
  - F: 全屏切换
- **替代方案**: 在每个 Bar 组件中绑定事件 - 代码分散

### 6. 回放工具栏风格统一
- **决定**: 参考 LivePlayerBar 使用 antd-style 的 createStyles 和 Button 组件
- **原因**: 保持代码风格一致，利用 Ant Design 组件
- **替代方案**: 保持自定义 button 元素 - 风格不统一

## Risks / Trade-offs

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 快捷键与页面其他功能冲突 | 中 | 添加事件目标检查，避免在 input/textarea 中触发 |
| 全屏快捷键在某些浏览器受限 | 低 | 优雅降级，仅提示用户 |
| 自定义 Slider 样式在 Ant Design 升级后失效 | 低 | 使用稳定 API，预留回归测试 |

## Open Questions

无 - 所有需求明确，可直接实施。
