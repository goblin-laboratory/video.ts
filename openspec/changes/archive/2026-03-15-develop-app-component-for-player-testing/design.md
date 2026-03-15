## Context

当前 App.tsx 只是一个简单的 Rsbuild 模板页面。项目已经有完整的播放器组件库（ReactjsPlayer + PlayerSkin），需要一个测试页面来验证各种播放内核和模式的功能。

**约束条件：**
- 使用 Ant Design 作为 UI 组件库
- 使用现有的播放器组件架构
- 播放器区域暂时用黑色 div 占位
- 优先使用 ahooks 提供的 hooks

## Goals / Non-Goals

**Goals:**
- 提供平铺展示的播放模式+内核选项，直播在前，方便快速选择
- 每个选项包含模式、内核信息
- 播放器区域显示当前选中的配置信息
- 使用 ahooks 的 useCreation、useMemoizedFn、useDebounceEffect

**Non-Goals:**
- 不实现真实的视频播放功能
- 不修改播放器核心组件
- 不添加测试用例
- 播放地址暂留空，后续补充

## Decisions

1. **使用 Ant Design 的 Radio.Group 平铺展示所有选项**
   - 原因：所有选项一目了然，方便快速切换

2. **页面布局：顶部平铺选择区 + 下方播放器区域**
   - 原因：选择区在上，播放区在下，符合直觉

3. **可用选项列表（直播在前）**
   - 直播-native
   - 直播-srswebrtc
   - 直播-mpegts
   - 直播-hlsjs
   - 回放-native
   - 回放-hlsjs

4. **默认选中第一个选项（直播-native）**

5. **使用 ahooks**
   - `useCreation` 代替 `useMemo`
   - `useMemoizedFn` 代替 `useCallback`
   - `useDebounceEffect` 用于需要防抖的场景

6. **状态管理：使用 React useState**
   - 原因：简单场景，不需要额外状态管理库

## Risks / Trade-offs

- 风险：黑色 div 占位可能无法完全模拟真实播放器的交互
- 缓解：后续可以快速替换为真实播放器组件
