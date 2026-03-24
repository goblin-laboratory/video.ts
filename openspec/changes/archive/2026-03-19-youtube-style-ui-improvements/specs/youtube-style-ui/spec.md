## ADDED Requirements

### Requirement: YouTube Style Color Scheme
播放器 UI SHALL 采用 YouTube 风格配色，进度条激活部分使用红色 (#FF0000)，滑块圆点使用白色。

#### Scenario: Progress bar has YouTube style colors
- **WHEN** 回放进度条渲染
- **THEN** 已播放部分为红色 (#FF0000)，滑块圆点为白色

#### Scenario: Volume slider has YouTube style colors
- **WHEN** 音量滑块渲染
- **THEN** 已选音量部分为红色 (#FF0000)，滑块圆点为白色

### Requirement: Center Play Button Style
暂停时的中心播放按钮 SHALL 不使用半透明圆环背景，改用半透明文本阴影效果。

#### Scenario: Center play button has no circular background
- **WHEN** 视频暂停，中心播放按钮显示
- **THEN** 按钮没有圆形半透明背景，只有播放图标和文本阴影

### Requirement: Controls Visible When Paused
视频暂停时，中心播放按钮和底部控制栏 SHALL 保持可见，不自动隐藏。

#### Scenario: Controls stay visible when paused
- **WHEN** 视频处于暂停状态
- **THEN** 控制栏始终显示，不会自动隐藏

#### Scenario: Controls auto hide when playing
- **WHEN** 视频正在播放且用户无操作
- **THEN** 控制栏在 3 秒后自动隐藏

### Requirement: Playback Rate Font Style
回放倍速显示 SHALL 使用正常字体样式，不加粗或额外放大。

#### Scenario: Playback rate font is normal
- **WHEN** 倍速按钮显示当前播放速率
- **THEN** 字体使用正常字重和大小

### Requirement: Uniform Button Sizes
音量按钮和全屏按钮 SHALL 使用相同的尺寸和样式。

#### Scenario: Volume button matches fullscreen button size
- **WHEN** 音量按钮和全屏按钮并排显示
- **THEN** 两个按钮具有相同的尺寸和间距

### Requirement: Correct Mute Icon
静音图标 SHALL 使用正确的图标组件。

#### Scenario: Mute icon shows correct state
- **WHEN** 视频静音时
- **THEN** 显示静音图标
- **WHEN** 视频未静音时
- **THEN** 显示音量图标

### Requirement: Updated Demo Stream URLs
演示应用 SHALL 使用新的 FLV 和 HLS 播放地址。

#### Scenario: Demo uses new FLV URL
- **WHEN** 用户选择直播 - FLV 选项
- **THEN** 播放器加载 http://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv

#### Scenario: Demo uses new HLS URL
- **WHEN** 用户选择直播 - HLS 选项
- **THEN** 播放器加载 http://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8
