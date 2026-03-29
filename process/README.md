# Process

## ■ 役割

`process/` は、
本OSの実行プロトコルを定義する。

ここで扱うのは思想ではなく、
1サイクルごとの動作順序である。

---

## ■ 実行ループ

本OSは以下のループで動作する。

1. input
2. normalize
3. interpret
4. decide
5. act
6. update
7. archive

通常フローで扱えないリスクや異常が見えた場合は、
任意段階から `escalation` へ分岐してよい。

---

## ■ 各段階

### 1. input

入力を受け取る。

ここでは以下の二系統を扱う。

- conversation input
- log input

`input` の責務は、
入力源の判定と受信単位の切り出しまでである。

### 2. normalize

二系統入力を、
後段が扱える共通形式へ整える。

ここで初めて、
conversation と log の密度差を吸収する。

### 3. interpret

正規化された入力束を意味構造へ変換する。

ここでは、
現在サイクルで有効な差分だけを抽出する。

### 4. decide

解釈された構造から、
複数の行為候補を立ち上げ、
その中から1つを選択する。

ここで分岐が扱われる。

### 5. act

`decide` で選択された行為または応答を実行する。

`act` は実行専用層であり、
候補比較や採択は行わない。

### 6. update

実行結果を状態差分へ変換し、
current state と next state を更新する。

ここで更新回路が閉じる。

### 7. archive

更新結果を圧縮記録として `logs/` に保存する。

`archive` の出力は、
将来の `log input` として再投入可能である。

`archive` 完了後、
現在状態を単一参照点として残す必要がある場合は
`logs/000_current_state.md` を同一サイクルで同期する。

---

## ■ 正規形

本OSの正規形は、
「二系統入力・一系統更新」である。

```text
[input]
├─ conversation
└─ log
↓
normalize
↓
interpret
↓
decide
↓
act
↓
update
↓
archive
```

---

## ■ 入出力の原則

- `conversation input` は高密度な一次入力である
- `log input` は低密度・低コストな圧縮入力である
- `normalize` 以降の更新系は入力源に依存しない
- `logs` は唯一の主入力ではない
- `logs` は archive の出力であり、必要時には再入力可能な圧縮形式でもある
- `logs/000_current_state.md` は current_state の単一参照点であり、更新する場合は最新サイクルに同期する

---

## ■ 対応関係

- `core/` は OS の上位定義として、何が存在し何を前提とするかを定義する
- `context/` はこの運用主体に固有な前提・制約・条件付きリスクを保持する
- `theory/` は `core/` を説明し、外部読解可能な形へ展開する
- `process/` はどう動かすかを定義する
- `logs/` は圧縮記録と再利用可能な文脈を保持する
- `tips/` は差分から再利用できる軽量な手段を保持する
- `todo/` は次にやる具体行動を保持する
- `playbook/` は背景原理として参照されうる

通常利用では、
`logs diff -> tips参照 -> todo実行`
が主動線であり、
必要時のみ `playbook/` や `fragments/` を見に行く。

---

## ■ 正規命名

見出し名とプロトコル名は以下に固定する。

- `interpret`
- `decide`
- `act`
- `decision_reason`
- `input_channel`

旧表記の `interpretation` / `decision` / `action` は、
履歴ログに残っていてもよいが、
正本ドキュメントと新規テンプレートでは使わない。
