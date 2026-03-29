# Cognitive Tools

このディレクトリには、
本システムを補助する実用的な認知ツールを置く。

例：

- 日次チェックシート
- 状態判定フロー
- 対話前後の整流プロトコル
- 摩擦検出メモ
- ChatGPT からのログ抽出プロトコル
- 実行系への保存ハンドオフプロトコル
- ChatGPT / Codex / GitHub Desktop 運用フロー
- 自動生成されるハンドオフプロンプト

目的は自己理解ではなく、
運用時の負荷軽減と再現性の確保である。

ここへ置く前段階の候補は、
`public_candidates/` で
`destination_tag: cognitive_tool` として保留してよい。

## 構成

- `protocols/`
  抽出、保存、受け渡しの手順
- `templates/`
  実際にコピーベースで使う雛形
- `workflows/`
  複数ツールをまたぐ実運用フロー
- `generated/`
  スクリプトから同期生成される固定文面

ハンドオフ用の固定文面は、
`interfaces/cognitive_tools/generated/generated_agent_handoff_format.md`
を正本とし、
`npm run sync:handoff-prompts` または `npm run check:protocol` で同期する。

Claude / Discord / スマホ参照を含む実運用フローは、
`interfaces/cognitive_tools/workflows/chatgpt_codex_github_desktop_workflow.md`
を参照する。

抽出と保存の主要プロトコルは、

- `interfaces/cognitive_tools/protocols/chatgpt_log_extraction_protocol.md`
- `interfaces/cognitive_tools/protocols/codex_save_handoff_protocol.md`

を参照する。
