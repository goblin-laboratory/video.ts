## Context

当前项目使用 `ReactjsPlayer` 作为核心播放器组件名称。该名称冗长且与技术栈绑定，需要重命名为更简洁通用的 `Player`。

## Goals / Non-Goals

**Goals:**
- 将 `ReactjsPlayer` 目录和组件重命名为 `Player`
- 更新所有引用处的导入和导出
- 保持向后兼容（可选：导出别名）

**Non-Goals:**
- 不修改任何组件功能或行为
- 不添加新功能
- 不修改 API 接口（仅名称变更）

## Decisions

1. **目录命名**: `src/components/ReactjsPlayer/` → `src/components/Player/`
   - 理由：与组件名称保持一致

2. **导出策略**: 直接重命名，不保留旧名称别名
   - 理由：这是内部项目，没有外部用户依赖，无需向后兼容

3. **类型重命名**: `ReactjsPlayerRef` → `PlayerRef`
   - 理由：保持命名一致性

## Risks / Trade-offs

- **Breaking Change**: 现有导入 `ReactjsPlayer` 的代码将中断
  - 缓解：这是单仓库项目，所有引用在一处修改完成

- **Git 历史**: 文件移动可能影响 git blame
  - 缓解：使用 `git mv` 保留文件历史