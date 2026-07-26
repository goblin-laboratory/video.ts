## Why

ReactjsPlayer 这个名称过于冗长且与具体技术栈绑定，Player 更简洁、更通用，便于后续推广和使用。

## What Changes

- 将 `src/components/ReactjsPlayer/` 目录重命名为 `src/components/Player/`
- 将 `ReactjsPlayer` 组件重命名为 `Player`
- 更新所有引用该组件的文件：
  - `src/components/index.ts` - 导出名称
  - `src/App.tsx` - 导入和使用
  - `src/components/PlayerSkin/` 目录下的组件
  - `README.md` - 文档
- **BREAKING**: 导入名称从 `ReactjsPlayer` 变为 `Player`

## Capabilities

### New Capabilities

无（这是纯重命名，不引入新功能）

### Modified Capabilities

无（行为不变，仅名称变更）

## Impact

- **导出变更**: `import { ReactjsPlayer } from 'rplayer'` → `import { Player } from 'rplayer'`
- **文件变更**: 约 15 个文件需要更新导入/引用
- **文档更新**: README.md 中的示例代码