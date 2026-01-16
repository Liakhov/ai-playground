---
description: Create a git commit
allowed-tools: Bash(git status:*), Bash(git add:*)
---

## Context

- Current git status: !`git status`
- Current git diff: !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -5`

## Your task

Analyze the changes above and propose a commit message following **Conventional Commits 1.0.0** specification.

Format: `<type>[optional scope]: <description>`

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore

Present the proposed commit message and wait for user approval before executing any git commands.
