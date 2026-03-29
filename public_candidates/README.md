# Public Candidates

このディレクトリは、
将来的に公開可能性が高い概念や構造を保留する層である。

`public_candidates/` は、
すでに公開したものを置く場所ではない。
ここでは、
内部運用から切り出しても再現性があり、
他者が参照・fork・再利用できそうなものを一時的に保持する。

## 置くもの

- 個人固有の生ログに依存しすぎない概念
- 構造として説明可能な運用フレーム
- ツールや公開翻訳へ接続しうる管理概念
- 再現性が高く、他者への移植可能性があるもの
- 断片や局所原理のままでも有用で、横断統合しなくても価値が立つもの

## 置かないもの

- 生々しい個人履歴そのもの
- 現時点では個人文脈なしに読めないもの
- 脆弱性を過度に露出するもの
- まだ内部仮説の域を出ないもの
- `narratives/` のように、内部の横断的な読み筋そのものを保持する層
- 断片を横断的に編み上げることで、自己神話化や神話体系化を加速しうる導線
- `essay` 生成や `core` 候補化のような、上位物語を自動的に束ねる最終段の機能

## 公開安全方針

公開版では、
断片、局所原理、運用フレームの公開は許容してよい。
一方で、
それらを横断的に束ねて上位物語へ圧縮する導線は慎重に制限する。

危険なのは断片そのものより、
複数の断片や運用知が一つの整合的な神話体系として読めてしまうことである。
そのため公開スターターでは、
`essay` 生成、`core` 候補化、横断統合の自動促進は原則として含めない方がよい。
`narratives/` はその横断統合力を内部で扱うための層なので、
公開版には原則として含めない。

## 流れ

1. 内部で構造化される
2. 必要ならレイヤー管理やディレクトリ管理の対象になる
3. 公開可能性が高いと判断されたら `public_candidates/` に置く
4. 実際に外向けへ翻訳するときは `interfaces/public_translation/` へ送る
5. ツールとして切り出すときは `interfaces/cognitive_tools/` へ送る

## 下位文書

- [`criteria.md`](./criteria.md)
  公開候補の判断基準
- [`_template.md`](./_template.md)
  候補の雛形
- [`log.md`](./log.md)
  候補化・撤回・公開移行の履歴

## 行き先タグ

- `cognitive_tool`
  将来的に `interfaces/cognitive_tools/` へ送る候補
- `public_translation`
  将来的に `interfaces/public_translation/` へ送る候補
- `both`
  翻訳とツール化の両方に開けている候補

## 初期候補

- `layer_management`
- `directory_management`

## 参照先

- `interfaces/cognitive_tools/README.md`
- `interfaces/public_translation/README.md`
- `meta/layer_management/README.md`
- `meta/directory_management/README.md`
