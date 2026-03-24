## Why

当前播放器 UI 存在多个问题：直播和回放音量控制组件重复实现、静音图标使用错误、进度条圆点颜色样式不符合 YouTube 风格、暂停时中心播放按钮有半透明圆环背景、暂停时工具栏自动隐藏影响用户体验、倍速字体样式异常、音量按钮尺寸与全屏按钮不一致。需要统一优化播放器 UI 风格，提升用户体验。

## What Changes

- 更新演示播放地址：直播-MPEG-TS 改为 FLV（http://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv），直播-HLS 使用新地址（http://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8）
- 重构音量控制为共享组件，直播和回放使用同一套音量控制
- 统一颜色风格为 YouTube 风格
- 修复静音图标使用错误的问题
- 修正进度条和音量进度条的圆点颜色，参考 YouTube 样式
- 移除暂停时中心播放图标的半透明圆环背景，改用半透明文本阴影
- 修改自动隐藏逻辑：暂停时播放按钮和下方工具栏不自动隐藏
- 检查并修复回放倍速字体样式问题
- 统一音量图标按钮与全屏按钮的大小和尺寸

## Capabilities

### New Capabilities

- `shared-volume-control`: 共享音量控制组件，供直播和回放共同使用

### Modified Capabilities

- `youtube-style-ui`: 统一 YouTube 风格的 UI 样式，包括颜色、进度条、按钮尺寸等

## Impact

- 受影响代码：`src/App.tsx`（播放地址更新）、`src/components/PlayerSkin/` 目录下的 UI 组件
- 受影响组件：`LivePlayerBar`、`PlaybackPlayerBar`、`CenterPlayButton`、`AutoHide`
- 新增组件：共享音量控制组件 `VolumeControl`
