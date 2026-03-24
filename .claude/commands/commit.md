---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
argument-hint: [message]
description: 创建 git 提交
---

## 上下文

- 当前状态: !`git status`
- 当前差异: !`git diff HEAD`
- 当前分支: !`git branch --show-current`
- 最近提交: !`git log --oneline -10`

## 任务

创建提交消息: $ARGUMENTS

提交消息使用中文，符合 commitlint 格式要求，包含：
- 简短摘要（最多 72 字符）
- 如需要添加详细描述
