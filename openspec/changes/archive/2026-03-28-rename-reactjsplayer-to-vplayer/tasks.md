## 1. 目录重命名

- [x] 1.1 将 `src/components/ReactjsPlayer/` 目录重命名为 `src/components/Player/`
- [x] 1.2 更新 `src/components/Player/index.tsx` 中的组件导出名称

## 2. 更新引用

- [x] 2.1 更新 `src/components/index.ts` 中的导出
- [x] 2.2 更新 `src/App.tsx` 中的导入和使用
- [x] 2.3 更新 `src/components/PlayerSkin/` 目录下的所有引用：
  - `LivePlayerBar.tsx`
  - `PlaybackPlayerBar.tsx`
  - `VolumeControl.tsx`
  - `AutoHide.tsx`
  - `CenterPlayButton.tsx`
  - `PlayerBar.tsx`
  - `LiveIndicator.tsx`

## 3. 更新文档

- [x] 3.1 更新 `README.md` 中的示例代码
- [x] 3.2 更新 `CLAUDE.md` 中的组件名称引用

## 4. 验证

- [x] 4.1 运行 `pnpm run check` 确保无类型错误
- [x] 4.2 运行 `pnpm run build` 确保构建成功