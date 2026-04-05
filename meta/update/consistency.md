# Consistency Contract

## ■ 目的

この文書は、
プロトコル名、単一参照点、抽出テンプレートの整合性を保つための最小契約である。

履歴ログは過去の表記を残してよいが、
正本ドキュメントと新規テンプレートはここに従う。

---

## ■ 正規命名

段階名は以下に固定する。

1. `input`
2. `normalize`
3. `interpret`
4. `decide`
5. `act`
6. `update`
7. `archive`

キー名は以下に固定する。

- `input_channel`
- `decision_reason`
- `current_state`
- `next_state`

以下は旧表記として扱う。

- `interpretation`
- `decision`
- `action`
- `source_channel`
- `decision理由`

---

## ■ current_state の単一参照点

`logs/000_current_state.md` は current_state の単一参照点である。

運用ルール：

- `daily` または `transition` で current_state が変化したら、同じ更新単位で同期する
- `logs/000_current_state.md` には `last_synced` と `sync_sources` を残す
- `last_synced` は `YYYY-MM-DD` または `YYYY-MM-DD_02` のような最新 daily 参照名で記録してよい

---

## ■ escalation の位置づけ

`escalation` は通常フローの外部仕様ではない。

以下のいずれかの段階から分岐してよい。

- `interpret`
- `decide`
- `act`
- `update`

復帰時は、
必要なら current_state を更新してから通常サイクルへ戻る。

---

## ■ 変更時チェック

以下のファイルを変更したときは、
`npm run check:protocol` を実行する。

ローカルで自動化する場合は、
一度だけ `npm run setup:hooks` を実行して pre-commit hook を有効化する。

- `README.md`
- `core/*.md`
- `process/*.md`
- `logs/000_current_state.md`
