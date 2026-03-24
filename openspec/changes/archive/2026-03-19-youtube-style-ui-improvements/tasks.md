## 1. 更新演示播放地址

- [x] 1.1 更新 App.tsx 中的直播-MPEG-TS 为 FLV，地址改为 http://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv
- [x] 1.2 更新 App.tsx 中的直播-HLS 地址为 http://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8

## 2. 创建共享音量控制组件

- [x] 2.1 创建 VolumeControl.tsx 组件，包含静音按钮和音量滑块
- [x] 2.2 为 VolumeControl 应用 YouTube 风格的滑块样式
- [x] 2.3 修改 LivePlayerBar 使用新的 VolumeControl 组件
- [x] 2.4 修改 PlaybackPlayerBar 使用新的 VolumeControl 组件

## 3. 优化进度条样式

- [x] 3.1 确保回放进度条使用正确的 YouTube 风格（红色轨道，白色圆点）
- [x] 3.2 确保音量进度条使用正确的 YouTube 风格（红色轨道，白色圆点）

## 4. 修改中心播放按钮样式

- [x] 4.1 移除 CenterPlayButton 的圆形半透明背景
- [x] 4.2 为播放图标添加半透明文本阴影效果
- [x] 4.3 更换播放图标，从 PlayCircleOutlined 改为 CaretRightOutlined

## 5. 修改自动隐藏逻辑

- [x] 5.1 修改 AutoHide.tsx，暂停时保持控制栏可见且不自动隐藏
- [x] 5.2 确保播放时仍保持原有的自动隐藏行为

## 6. 统一按钮尺寸和样式

- [x] 6.1 修改音量按钮使用与全屏按钮相同的 TooltipButton 组件
- [x] 6.2 确保音量按钮和全屏按钮尺寸一致

## 7. 修复倍速字体样式

- [x] 7.1 检查并修复 PlaybackPlayerBar 中倍速显示的字体样式
- [x] 7.2 确保倍速文字使用正常字重，不加粗或额外放大

## 8. 验证和测试

- [x] 8.1 运行 pnpm run check 确保代码符合规范
- [x] 8.2 运行 pnpm test 确保测试通过
- [x] 8.3 启动开发服务器验证 UI 效果
