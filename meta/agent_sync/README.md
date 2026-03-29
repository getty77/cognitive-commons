# Agent Sync

このディレクトリには、
外部エージェント環境へ同期したい運用原則の正本を置く。

ここで扱うのは、
Spiral Recursive OS 本体そのものではなく、
各エージェント環境へ写像するための同期用ソースである。

## 役割

- 持ち運び可能な薄い運用層の正本を持つ
- 各エージェント環境の共通ルールへ同期する
- repo 固有の濃い写像とは分けて扱う
- Skill 目録も同じ判断軸で外部環境へ共有する

## 現在の同期対象

- `portable_ops.md`
  各エージェント環境の `portable-ops.md` へ同期する
- `spiral_recursive_os.md`
  各エージェント環境の `spiral-recursive-os.md` へ同期する濃い同期層の正本
- `meta/skills/README.md`
  各エージェント環境の `spiral-skills.md` へ同期する Skill 目録の正本
- `candidate_criteria.md`
  コミット差分から agent sync 候補を自動判定する基準

## 関係する層

- 薄い共通原則:
  `meta/agent_sync/portable_ops.md`
- 濃い repo 固有写像:
  `meta/agent_sync/spiral_recursive_os.md`

## 現在の同期先

- `~/.claude/rules/`
- `~/.codex/rules/`

どちらも同じ正本から写像する。
必要になったら対象エージェントを増やしてよい。

## 同期方法

- `npm run sync:agent-projections`
- `npm run check:agent-sync-candidates`

このコマンドで、
`portable-ops.md` と
`spiral-recursive-os.md` と
`spiral-skills.md`
の三系統を各エージェント環境へ同期する。

`check:agent-sync-candidates` は、
直前コミットの差分を見て
`portable_ops` または `spiral-recursive-os` または Skill 目録の見直し候補があるかを通知する。
