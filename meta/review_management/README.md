# Review Management

このディレクトリは、
コミット時に走らせる軽量レビューの位置づけをまとめる。

ここで扱うレビューは、
自動で構造変更を行うものではない。
日常運用では重くしすぎず、
それでも「次の会議で見る価値がある差分」を
浮かせるための advisory 層として使う。

## 基本方針

- 日常のコミット時レビューは軽量に保つ
- `HEAD` の変更差分だけを見る
- 全履歴走査や本文深掘りはしない
- 自動昇格・自動降格・自動削除は行わない
- advisory が出たら、そのコミットサイクルの中で一度は見ることを推奨する
- 実際の重い判断は全体レビューやレイヤー管理会議へ渡してよい

## 下位チェック

- `check:agent-sync-candidates`
  - `.claude` / `.codex` 側の写像見直し候補
- `check:expansion-candidates`
  - Skill 化や `public_candidates/` 追加の見直し候補
- `check:pruning-candidates`
  - `fragments / playbook / experiments / public_candidates / current_state` の軽量な剪定候補
- `check:essay-candidates`
  - `theory/operational/` から essay 化を検討してよい候補
- `check:current-state-sync`
  - `logs/000_current_state.md` の `last_synced` と最新 daily log の日付ズレ検出

## 位置づけ

- 増補候補と剪定候補を同じ review 面で扱う
- commit 時には候補抽出だけで終わらせず、同一サイクル内で見るべきだと分かる形にする
- 重い判断は、定期レビューや層管理会議で行う

## commit 時の扱い

- `npm run check:review-candidates` は、下位 checker をまとめて実行したうえで follow-up reminder も出す
- `check:linking-candidates` は bundled review ではなく、pre-commit で別に走らせる隣接 advisory として扱う
- pre-commit では `check:protocol` に加えて `check:linking-candidates` を走らせ、リンク構造の最低限の存在だけを見る
- reminder は精査の自動実行ではなく、「今見るべき候補がある」ことを明示するためのものである
- advisory の精査そのものは、対話または人間の判断で行う
- 実修正不要なら、`pass` 判断として閉じてよい
- 実修正が必要なら、そのまま追従修正して次のコミットで解消する
