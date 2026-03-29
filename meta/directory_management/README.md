# Directory Management

このディレクトリは、
ファイル群をどの時点でディレクトリ化するか、
またどこを優先的に再編するかを管理する。

`directory_management/` は、
レイヤー追加とは別の概念である。
ここで扱うのは新しい責務層を増やす判断ではなく、
既存の概念群をファイル構造として切り分けたり、
まとめ直したりする判断である。

## 目的

- 概念の親子関係をファイル構造にも反映する
- ファイル数の増加による見通し悪化を抑える
- 判断基準と実施履歴を残し、場当たり的なディレクトリ増殖を防ぐ
- 必要に応じてディレクトリ統合も行い、構造肥大化を防ぐ
- 層追加時に、ディレクトリ責務の定義漏れを防ぐ

## 基本原則

- ディレクトリ管理は見た目の整理ではなく責務の可視化である
- ディレクトリ化と統合は対になる操作として扱う
- 概念の親子関係が明確なときに切る
- 探索コストが責務可視化を上回るなら統合を検討する
- まず README で責務を定義し、それでも混線するなら子ディレクトリを切る
- 新しい層を追加した場合は、その層のディレクトリ責務も同一サイクルで確認する
- 一度再編した対象は優先度キューから外し、運用定着と次の密集点を見張る

## 下位操作

- [`directory_creation/README.md`](./directory_creation/README.md)
  ディレクトリ化
- [`directory_merge/README.md`](./directory_merge/README.md)
  統合

## 共通文書

- [`priority_queue.md`](./priority_queue.md)
  現時点の優先順位

## 参照先

- `meta/update/protocol.md`
- `meta/layer_management/README.md`
- `interfaces/cognitive_tools/README.md`
