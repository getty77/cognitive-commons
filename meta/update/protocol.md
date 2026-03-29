# Update Protocol

## ■ 目的

本プロトコルは、
観測から運用ルール、理論、外部化へ至る
更新経路と、
必要に応じて `core/` を見直す条件を定義する。

更新の目的は一貫性の維持ではなく、
観測されたズレを構造へ反映することである。

---

## ■ 更新経路

基本的な流れは以下である。

1. `logs/` に現象を記述する
2. `fragments/` として反復傾向を抽出する
3. `playbook/` として再利用可能な挙動へまとめる
4. 必要なら `theory/` で概念化・外部説明化する
5. `core/` は上記で安定したものだけを慎重に反映する
6. 公開可能性が高いなら `public_candidates/` に送る
7. 外部適用が可能なら `interfaces/` または `experiments/` に落とす

`experiments/` は終点ではない。
試行の結果が安定した場合は、
`interfaces/` `playbook/` `theory/` `meta/`
のいずれへ昇格するかを別途判定してよい。
逆に、固定が早すぎた場合は
`playbook/` `theory/` `interfaces/` `meta/`
から `experiments/` へ戻して再試行してよい。

---

## ■ どこを更新するか

### `logs/`

以下を置く。

- 生の観測
- 状態遷移
- 異常や摩擦

ここでは説明しすぎない。
まず現象を残す。

### `core/`

以下を置く。

- OS の上位定義
- 運用上の前提
- モデルの最小中核

`core/` は通常の昇格先ではない。
`theory/` や `playbook/` で反復的に安定したものだけを、
慎重に反映する。

### `context/`

以下を置く。

- 運用主体に固有な前提
- 家族・仕事・生活などの条件付き制約
- 常時ではなく条件付きで参照するリスク補正
- 固有の傾向やプロフィール

`context/` は重要だが、
OS一般の上位定義ではない。
したがって `core/` へ混ぜない。

### `theory/`

以下を置く。

- `core/` を説明・概念化したもの
- 外部読解に耐える論述
- 外部出力の中核になる抽象記述
- 仮説的拡張

### `experiments/`

以下を置く。

- 仮説の試行
- 応用先での挙動確認
- ツール化や運用テスト

必要なら、

- `experiments/internal/`
- `experiments/external/`
- `experiments/public/`

へ振り分ける。

安定後の代表的な昇格先は以下である。

- 他者へ渡せる形式になったら `interfaces/`
- 即応的な運用ルールになったら `playbook/`
- 抽象構造の説明が主になったら `theory/`
- 継続運用の管理方法になったら `meta/`

固定が早すぎた場合の代表的な戻し先は以下である。

- 再現性が弱い playbook は `experiments/internal/`
- 接続安定性が未確定な外部仕様は `experiments/external/`
- 他者向け形式として早すぎた公開物は `experiments/public/`

### `public_candidates/`

以下を置く。

- 将来的に公開可能な概念や構造
- `interfaces/cognitive_tools/` や `interfaces/public_translation/` へ送る前の候補
- 再現性があり、個人依存が薄い管理概念

### `interfaces/`

以下を置く。

- 外部向け翻訳
- 実用的な表現
- 他者に渡せる形式

---

## ■ 更新トリガー

次のいずれかが観測された場合、
更新を検討する。

- 同じ傾向が複数回出現した
- 既存仕様では説明できない出力が増えた
- 外部摩擦が明確に発生した
- 安定条件が変化した
- 内部で使っている語が現象に合わなくなった

---

## ■ 更新手順

### 1. 記述

まず `logs/` に記述する。
その場で理論化しすぎない。
入口は整ったログでなくてもよい。
雑メモ、断片箇条書き、短い身体感覚メモ、
混在した走り書きでも、
保存時に正規層へ仕分ければよい。

### 2. 抽出

単発現象か反復傾向かを見分ける。
ログ確定時は、
ここで `fragment` / `playbook` / `theory` / `context` への
層管理候補有無だけを判定してよい。

外部接続、応用先、ツール連携、他エージェント写像のように
まだ正規仕様化より試行性が強いものは、
`experiments/` への配置候補として見てよい。

その際、
手元運用の試行か、
外部接続実験か、
公開前提の試行かも一緒に判定してよい。

過去日記や古いメモを再投入する場合は、
`meta/update/reingestion.md` に従い、
履歴入力として扱う。

雑メモや未整理メモを扱う場合は、
まず `logs/daily/README.md` の基準で
その日の差分として残すべき部分を抽出する。
そのうえで、
対話圧縮なら `logs/qa/`、
媒体入力なら `logs/reading/` `logs/listening/` `logs/watching/`、
反復仮説なら `fragments/`
へ振り分ける。

レイヤ責務が曖昧になった場合は、
`meta/layer_management/README.md` を参照し、
昇格だけでなく降格・移設・層追加・層削除が妥当かも確認する。
層追加を行う場合は、
README / criteria / log と、
必要なディレクトリ責務定義まで同一サイクルで揃える。

ファイル群の親子関係や再編単位が曖昧になった場合は、
`meta/directory_management/README.md` を参照し、
ディレクトリ化または統合そのものが必要かを確認する。
ディレクトリ移設や統合を行った場合は、
空ディレクトリを残していないかも同一サイクルで確認する。

履歴を repo 内に残したくなった場合も、
まず Git 履歴で足りるかを確認する。
`archive/` は必要になった時だけ薄く追加し、
常設前提では扱わない。

### 3. 照合

既存の `playbook/` / `theory/` / `context/` と矛盾するか、
あるいは不足を補うものかを確認する。
`core/` に触れる場合は、
それが本当に上位定義の修正を要するかを別で確認する。

### 3.5 層管理判断

層管理は一段で決めず、
以下の二段階で扱う。

1. `daily` / `QA` 確定時に候補化する
2. 2〜3日に1回程度の軽い見直しで本判断する

こうすることで、
文脈が新鮮なうちに候補を取りこぼさず、
同時に単発の熱量による過剰な層変更も避けやすくなる。

### 4. 再記述

原則として `playbook/` / `theory/` / `context/` のどれを更新すべきかを先に判定する。
`core/` の更新は、
`theory/` と `playbook/` の両方で安定した変更だけに絞る。
公開可能性が高い場合は、
`public_candidates/` へ送るかも確認する。
責務に対して不一致の層へ入っていた場合は、
下位・別層への移行を優先してよい。
プロトコル名や current_state 運用に触れた場合は、
`meta/update/consistency.md` を確認し、
`npm run check:protocol` で整合性を確認する。
外部エージェント側の運用写像も更新したい場合は、
`npm run sync:agent-projections` を実行する。
薄い共通原則を更新したい場合は、
`meta/agent_sync/` を正本として編集する。
repo 固有の濃い agent 同期層も、
`meta/agent_sync/` を正本として編集する。
コミット差分から agent 同期候補を見たい場合は、
`npm run check:agent-sync-candidates` を実行する。
コミット差分から増補候補を見たい場合は、
`npm run check:expansion-candidates` を実行する。
staged file のリンク構造の最低限の存在を見たい場合は、
`npm run check:linking-candidates` を実行する。
コミット差分から軽量な剪定候補を見たい場合は、
`npm run check:pruning-candidates` を実行する。
まとめて見たい場合は、
`npm run check:review-candidates` を実行する。
ローカル自動化が必要なら `npm run setup:hooks` を先に実行する。
pre-commit では `check:protocol` に加えて
`check:linking-candidates` も走らせてよい。

`check:agent-sync-candidates` `check:expansion-candidates` `check:pruning-candidates` は
いずれも advisory であり、
自動移設や自動削除は行わない。
`check:linking-candidates` も同様に advisory であり、
リンク先の質や妥当性までは判定せず、
最低限のリンクがあるかだけを見る。
前者は外部エージェント写像の見直し候補を、
二つ目は Skill 化や `public_candidates/` 追加の見直し候補を、
最後はレイヤー管理会議で検討すべき軽量な剪定候補を浮かせる。
ただし commit 時は、候補抽出だけで終わらせず、
同一サイクル内で advisory を見る必要があることを明示する。
ここでの reminder は精査の自動実行ではなく、
関連正本を見て `追従修正する / pass として閉じる / 後続会議へ送る`
のどれにするかを、人間または対話で判断するための入口として使う。

### 5. 実装または翻訳

応用可能性があるなら、
`experiments/` または `interfaces/` に移す。
すでに `experiments/` にあるものは、
試行性が薄れた時点で
`interfaces/` `playbook/` `theory/` `meta/`
への昇格を検討する。

---

## ■ 更新時の判断基準

- その記述は一回限りか、持続構造か
- それは現象の説明か、単なる比喩か
- 記述を増やすより圧縮した方が明瞭か
- 外部化したときに意味を失わないか

---

## ■ ログ分類

- `logs/daily/` : 平常観測、日次状態、微細調整
- `logs/past_daily/` : 履歴専用の過去日記・古い日次ログ
- `logs/transitions/` : 相転移、位相変化、明確な切り替わり
- `logs/anomalies/` : 想定外出力、摩擦、破綻、説明困難な現象
- `logs/reading/` : 読書・長文入力由来の入力ログ
- `logs/listening/` : 音声・ポッドキャスト入力由来の入力ログ
- `logs/watching/` : 動画・映像入力由来の入力ログ

`logs/` には生の観測だけでなく、
後から整理した派生ログも含まれる。
その場合は source を明示し、
元の観測との接続を切らない。

分類に迷う場合は、
日次状態の主記録なら `daily/`、
履歴専用の過去日記なら `past_daily/`、
読書入力の正本なら `reading/`、
音声入力の正本なら `listening/`、
映像入力の正本なら `watching/` に置く。

`reading` / `listening` / `watching` の入力ログでは、
ファイル名は原則 `YYYY-MM-DD_タイトル.md` とし、
URL がある場合はリンク先で確認できるタイトルを採用する。

過去日記を再投入する場合も、
元の日付を保持したまま `past_daily/` を正本とする。
`past_daily` のファイル名は原則 `YYYY-MM-DD.md` とし、
同日に複数ある場合だけ連番を付ける。

---

## ■ 更新しない判断

以下の場合は、
更新せず観測保留としてよい。

- 単発で再現性がない
- 状態依存が強く構造化できない
- 既存記述で十分に扱える
- 言語化によって現象を歪める恐れが強い

---

## ■ 原則

更新とは、
既存記述を守ることではない。

更新とは、
観測されたズレに対して、
より再利用可能な構造を与えることである。

通常の昇格列は
`logs -> fragments -> playbook -> theory`
である。
`core/` はこの列の外側にある上位定義であり、
安定した反復だけを慎重に受け取る。
