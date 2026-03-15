## Why

当前 App 组件只是 Rsbuild 的默认模板，没有实际测试播放器的功能。需要开发一个功能完整的 App 组件来测试播放器的各种内核和播放模式。

## What Changes

- 更新 App.tsx 组件，添加播放器测试界面
- 将所有播放模式和内核选项平铺展示，直播选项在前
- 每个选项包含：播放模式、内核、播放地址（后续补充）
- 播放器区域使用黑色 div 占位，显示当前选中的配置信息
- 优先使用 ahooks 的 hooks：useCreation、useMemoizedFn、useDebounceEffect

## Capabilities

### New Capabilities

- `app-player-testing`: App 组件的播放器测试界面，包含平铺的模式+内核选择功能

### Modified Capabilities

- 无

## Impact

- `src/App.tsx` - 主要修改文件
- `src/App.css` - 可能需要添加样式
