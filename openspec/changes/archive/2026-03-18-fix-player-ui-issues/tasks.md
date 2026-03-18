## 1. 直播控制栏修复

- [x] 1.1 修改直播暂停图标为 PlayOutlined（无圆圈三角）
- [x] 1.2 取消注释并启用直播音量控制功能
- [x] 1.3 移除直播模式的设置按钮（SettingOutlined）

## 2. 回放控制栏样式优化

- [x] 2.1 为回放进度条添加 YouTube 红色主题样式
- [x] 2.2 为回放音量滑块添加 YouTube 红色主题样式
- [x] 2.3 重构回放控制栏使用 Ant Design Button 组件和 createStyles 统一样式

## 3. 中央播放按钮组件

- [x] 3.1 创建 CenterPlayButton 组件
- [x] 3.2 在 LivePlayerSkin 中集成 CenterPlayButton
- [x] 3.3 在 PlaybackPlayerSkin 中集成 CenterPlayButton

## 4. 键盘快捷键功能

- [x] 4.1 创建 useKeyboardShortcuts hook
- [x] 4.2 实现空格键暂停/播放功能
- [x] 4.3 实现左右箭头前进/后退功能
- [x] 4.4 实现上下箭头音量增减功能
- [x] 4.5 实现 M 键静音切换功能
- [x] 4.6 实现 F 键全屏切换功能
- [x] 4.7 在播放器中集成快捷键 hook

## 5. 测试与验证

- [x] 5.1 验证所有功能正常工作
- [x] 5.2 运行代码检查 pnpm run check
- [x] 5.3 格式化代码 pnpm run format
