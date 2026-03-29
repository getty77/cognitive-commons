# Layer Management

このディレクトリは、
レイヤー構造そのものを管理するための親概念をまとめる。

`layer_management/` は、
単なる昇格ルール置き場ではない。
ここでは、各層の責務を保つために必要な
層管理の原則と履歴を、
下位操作ごとに分けて扱う。

## 基本原則

- 層管理は価値判断ではなく責務分離である
- 昇格も降格も失敗ではなく責務調整である
- 移設は昇格・降格に還元できない別責務への調整として扱ってよい
- 概念は昇格・降格だけでなく、上位概念新設・下位概念新設・既存概念へのリンクでも整えてよい
- 層追加と層削除は構造変更であり、責務が既存層で収まらないかを先に見る
- 層追加時は、層管理基準とディレクトリ責務定義を同一サイクルで揃える
- 強い記述ほど上位に置くのではなく、より一般な記述だけを上位に置く
- あるレイヤーで扱うには具体すぎるものは、一段下に戻してよい
- 操作は原則として `昇格 / 降格 / 移設 / 層追加 / 層削除` の五つで扱う
- `分割 / 統合` は必要になった時だけ、既存操作の組み合わせで扱えるかを先に見る
- 履歴保持はまず Git に委ね、repo 内の `archive` 層は必要になった時だけ薄く作る

## レイヤーごとの責務

### `core/`

- OS 一般の上位定義
- 最小中核モデル
- 原理
- 状態遷移プロトコル

### `narratives/`

- 内部での読み筋
- 全体の連続性
- `core narrative`
- essay の前段にある内部束ね

### `context/`

- 運用主体に固有な前提
- 個別制約
- 条件付きリスク
- プロフィール

### `theory/`

- `core/` の説明
- 概念展開
- 外部読解可能な抽象記述

### `experiments/`

- 外部適用の試行
- 応用先での挙動確認
- 接続実験
- まだ正規層へ固定しない実装・運用テスト
- 必要に応じて `internal / external / public` に振り分ける
- 安定したものは `interfaces/` `playbook/` `theory/` `meta/` へ昇格してよい
- 固定が早すぎたものは `playbook/` `theory/` `interfaces/` `meta/` から戻してよい

### `archive/` （必要時のみ）

- 現役運用からは外れたが、repo 内で履歴参照したいもの
- Git 履歴だけでは追いにくい旧正本
- まだ削除はしたくないが、通常運用層には置かないもの

これは常設前提ではない。
必要性が明確になるまでは Git 履歴を優先し、
必要時のみ薄い層として追加してよい。

### `playbook/`

- 即応的な運用ルール
- 発火条件、兆候、対応

### `tips/`

- すぐ効く軽量ハック
- 小さな運用知
- 局所的な再利用メモ

### `todo/`

- 次にやる具体行動
- 実行キュー
- 完了したら消す前提の軽量タスク層

`todo / tips / playbook` は、
単純な上下関係というより、
`実践 / 手段 / 理論`
の三層として読む方が自然である。
したがって通常は、
一方向の昇格列より
相互参照やリンクで結ぶことを優先する。

### `fragments/`

- 局所仮説
- 保留中の観測知

### `logs/`

- 生の観測
- 状態遷移
- 摩擦

## 下位操作

- [`promotion/README.md`](./promotion/README.md)
  昇格
- [`demotion/README.md`](./demotion/README.md)
  降格
- [`relocation/README.md`](./relocation/README.md)
  移設
- [`layer_addition/README.md`](./layer_addition/README.md)
  層追加
- [`layer_deletion/README.md`](./layer_deletion/README.md)
  層削除

各操作ディレクトリには、
`README.md` / `criteria.md` / `log.md` を置く。

## 概念リンク回路

層管理は、
単純な昇格・降格列だけで回す必要はない。
概念を整えるときは、

- 上位概念を新設する
- 下位概念を新設する
- 既存概念へリンクする

の三つを併用してよい。

ここでいうリンクには、
上下リンクだけでなく同層リンクも含む。
近い仮説どうし、補完し合う playbook どうし、
連続して処理する todo どうしのように、
無理に統合や昇格をしない方が自然な関係は
同層リンクとして保持してよい。

特に
`todo / tips / playbook`
や
`core / narratives / theory`
のような近接層では、
無理に上下移動させるより、
背景原理・実装手段・実践実体として
リンクで連携させる方が自然なことが多い。

## 層管理手順

1. 対象ファイルがどの責務を逸脱しているかを記述する
2. 昇格・降格・移設・層追加・層削除のどれが必要かを決める
3. 必要なら新しい受け皿ファイルや新層を先に作る
4. 層追加時は README / criteria / log と必要なディレクトリ責務定義を同一サイクルで揃える
5. 元ファイルを圧縮するか、移設する
6. 対応する下位操作ディレクトリの `log.md` に残す

日常のコミット時には、
`npm run check:pruning-candidates` で
`fragments / playbook / experiments / public_candidates / current_state`
の軽量な剪定候補だけを advisory として浮かせてよい。
これは自動剪定ではなく、
全体レビューやレイヤー管理会議の入口として扱う。

## いまの見張り対象

- `core/temporal_node_field.md`
  理論説明寄りに膨らむなら `theory/` への圧縮切り出しを検討する
- `core/node_evaluation_function.md`
  最小評価関数を超えて運用説明が増えるなら `theory/operational/` を併設する
- `playbook/constraint_collision.md`
  個別家庭制約の比重が増えるなら `context/identity_constraints.md` 側へ一部戻す
- `theory/spiral_recursive_line_essay.md`
  締まった essay として保持しつつ、運用説明は `theory/operational/` へ継続分離する

## 参照先

- `meta/update/protocol.md`
- `core/README.md`
- `context/README.md`
- `theory/README.md`
- `playbook/README.md`
