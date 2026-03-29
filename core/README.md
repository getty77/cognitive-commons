# Core

`core/` には、
OS 一般の上位定義だけを置く。

ここは運用主体に固有な情報置き場ではない。
また、即応手順や日常ルールを書く場所でもない。

## 役割

- OS の最小中核定義
- 認知モデル
- 原理
- 状態遷移プロトコル
- 一般化された評価関数

## 含めるもの

- `os_spec.md`
- `principles.md`
- `spiral_recursive_model.md`
- `temporal_node_field.md`
- `node_evaluation_function.md`
- `state_transition_protocol.md`
- `recursive_cycle.md`

## 含めないもの

- 運用主体のプロフィール
- 家族や仕事に由来する個別制約
- 条件付きの固有リスク履歴
- その場で使う即応ルール
- 単発観測や局所仮説

それぞれ、
`context/` / `playbook/` / `logs/` / `fragments/` に置く。

## 更新原則

`core/` は通常の昇格列の終点ではない。

通常の昇格列は、

`logs -> fragments -> playbook -> theory`

である。

これはレイヤー管理の一部であり、
必要なら降格・移設・層追加・層削除も行う。

`core/` はその外側で、
`playbook/` と `theory/` の両方において
安定したものだけを慎重に受け取る。
