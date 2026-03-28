## 1. 更新默认播放地址为 HTTPS

- [x] 1.1 更新 App.tsx 中的 FLV 播放地址为 https://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv
- [x] 1.2 更新 App.tsx 中的 HLS 播放地址为 https://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8

## 2. 支持播放地址编辑

- [x] 2.1 添加 URL 状态管理，支持每个选项的自定义 URL
- [x] 2.2 移除 Input 组件的 readOnly 属性
- [x] 2.3 实现 URL 输入变化时的处理逻辑，更新播放器源
