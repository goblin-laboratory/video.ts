## Why

当前播放器存在多个 UI/UX 问题，包括直播模式缺少音量调节、播放按钮图标不一致、进度条样式不协调、暂停时缺少中央大播放按钮提示，以及缺少键盘快捷键支持。这些问题影响用户体验，需要统一修复。

## What Changes

- 直播暂停图标改为不带圆圈的三角号 (PlayOutlined)
- 直播模式添加音量调节功能（取消注释现有代码）
- 移除直播模式全屏前面的配置按钮（SettingOutlined）
- 回放模式进度条和音量调节采用 YouTube 颜色风格（红色主题）
- 回放工具栏图标和文字风格统一参考直播模式
- 暂停时在播放器中央显示大的播放按钮
- 添加键盘快捷键支持（空格暂停/播放、左右箭头前进后退、上下箭头音量调节）

## Capabilities

### New Capabilities

- `keyboard-shortcuts`: 键盘快捷键支持功能
- `center-play-button`: 暂停时中央大播放按钮显示

### Modified Capabilities

- `live-player-bar`: 直播控制栏修改（图标、音量、配置按钮）
- `playback-player-bar`: 回放控制栏修改（样式、图标统一）

## Impact

- 受影响文件：
  - `src/components/PlayerSkin/LivePlayerBar.tsx`
  - `src/components/PlayerSkin/PlaybackPlayerBar.tsx`
  - `src/components/PlayerSkin/LivePlayerSkin.tsx`
  - `src/components/PlayerSkin/PlaybackPlayerSkin.tsx`
  - `src/components/ReactjsPlayer/index.tsx` (可能需要添加快捷键 hook)
- 新增组件/ Hook：键盘快捷键 hook，中央播放按钮组件
