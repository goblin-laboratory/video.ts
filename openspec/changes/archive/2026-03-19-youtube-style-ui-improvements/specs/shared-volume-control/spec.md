## ADDED Requirements

### Requirement: Shared Volume Control Component
系统 SHALL 提供一个可复用的音量控制组件，包含静音切换按钮和音量滑块，供直播和回放模式共同使用。

#### Scenario: Volume control renders correctly
- **WHEN** VolumeControl 组件被渲染
- **THEN** 组件显示静音图标按钮和音量滑块

#### Scenario: Mute button toggles mute state
- **WHEN** 用户点击静音按钮
- **THEN** 视频静音状态切换，图标相应变化

#### Scenario: Volume slider adjusts volume
- **WHEN** 用户拖动音量滑块
- **THEN** 视频音量实时更新，范围 0-100

#### Scenario: Volume zero auto mutes
- **WHEN** 音量滑块调整到 0
- **THEN** 视频自动静音
