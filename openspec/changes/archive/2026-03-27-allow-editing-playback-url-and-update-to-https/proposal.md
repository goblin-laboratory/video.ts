## Why

当前播放器的 URL 输入框是只读的，用户无法自定义播放地址；同时默认播放地址使用 HTTP 协议，存在安全性和混合内容问题。需要支持用户修改播放地址并将默认地址升级为 HTTPS。

## What Changes

- 将 App.tsx 中的 URL 输入框从只读改为可编辑
- 更新默认播放地址：将 `http://ivt.demo.qulubo.net` 改为 `https://ivt.demo.qulubo.net`
- 支持用户实时修改播放地址并应用到播放器

## Capabilities

### New Capabilities

- `editable-playback-url`: 允许用户在界面上编辑和修改播放地址

### Modified Capabilities

无

## Impact

- 影响 `src/App.tsx`：修改 Input 组件属性和状态管理逻辑
- 影响默认播放源配置：更新两个播放地址（FLV 和 HLS）
- 不影响播放器核心组件的 API 和功能
