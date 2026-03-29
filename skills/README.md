# Repo Skills

このディレクトリには、
Spiral Recursive OS 由来で repo 内に同梱する Skill 実体を置く。

目的は、

- repo の正本ルールと Skill 実体を近接させる
- 切り出し公開時にも同じ構造を維持しやすくする
- 個人環境の `~/.codex/skills/` に依存しすぎないようにする

個人環境へインストールする場合も、
まずここを正本として扱う。

## 実装済み Skills

- `spiral-daily-log-sorter`
  雑メモや混在入力を適切な保存先へ仕分ける
- `spiral-past-diary-reingestion`
  過去日記を現在のOS語彙で安全に再読解する
- `spiral-media-reinterpreter`
  読書・音声・映像由来の入力を media log へ正規化する
- `spiral-layer-review`
  レイヤー責務に照らして昇格・降格・移設などを査定する
- `spiral-public-candidate-evaluator`
  公開候補化と行き先タグを判定する
