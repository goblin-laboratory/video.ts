## ADDED Requirements

### Requirement: 平铺选项展示
App 组件 SHALL 将所有播放模式和内核组合以平铺方式展示，直播选项在前，方便用户快速选择。

#### Scenario: 显示所有可用选项
- **WHEN** 用户打开页面
- **THEN** 按以下顺序显示选项：直播-native、直播-srswebrtc、直播-mpegts、直播-hlsjs、回放-native、回放-hlsjs

#### Scenario: 默认选中第一个选项
- **WHEN** 用户首次打开页面
- **THEN** 默认选中直播-native

### Requirement: 选项包含完整信息
每个选项 SHALL 包含播放模式和内核信息，播放地址位置预留。

#### Scenario: 选项显示模式和内核
- **WHEN** 选项展示在页面上
- **THEN** 每个选项清晰显示播放模式（直播/回放）和内核名称

### Requirement: 播放器区域显示当前配置
App 组件 SHALL 在下方黑色 div 区域显示当前选中的配置信息。

#### Scenario: 播放器区域展示当前选择
- **WHEN** 用户选择一个选项
- **THEN** 黑色 div 区域显示：播放模式、内核、播放协议、播放地址（预留）

### Requirement: 使用 ahooks
App 组件 SHALL 优先使用 ahooks 提供的 hooks：useCreation、useMemoizedFn、useDebounceEffect。
