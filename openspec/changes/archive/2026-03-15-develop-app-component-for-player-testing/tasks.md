## 1. 页面布局和基础结构

- [x] 1.1 读取当前 App.tsx 文件内容
- [x] 1.2 更新 App.tsx，创建顶部选择区和下方播放器区域的布局
- [x] 1.3 导入 ahooks：useCreation、useMemoizedFn、useDebounceEffect

## 2. 平铺选项功能

- [x] 2.1 定义所有可用选项（直播-native、直播-srswebrtc、直播-mpegts、直播-hlsjs、回放-native、回放-hlsjs）
- [x] 2.2 使用 Ant Design Radio.Group 实现平铺选择 UI
- [x] 2.3 使用 useCreation 缓存选项配置
- [x] 2.4 默认选中直播-native

## 3. 播放器占位区域

- [x] 3.1 添加黑色 div 作为播放器占位区域
- [x] 3.2 在播放器区域显示当前选中的配置信息（模式、内核、协议、地址）
- [x] 3.3 使用 antd-style 方案添加样式

## 4. 验证和测试

- [x] 4.1 运行 pnpm run dev 验证页面正常显示
- [x] 4.2 测试各选项切换功能
- [x] 4.3 运行 pnpm run check 确保代码符合规范
