# Update Management

このディレクトリは、
repo 全体の更新運用に関わる正本をまとめる。

ここで扱うのは、

- `logs/` への保存と仕分け
- 過去日記の再投入
- 整合性維持

のような、
日々の更新経路そのものに関わる文書群である。

## 下位文書

- [`protocol.md`](./protocol.md)
  logs の分類、保存、更新の基底プロトコル
- [`reingestion.md`](./reingestion.md)
  過去日記の再投入手順
- [`consistency.md`](./consistency.md)
  正本同士の整合性契約

## 位置づけ

`meta/update/` は、
`layer_management/` や `directory_management/` より手前にある
日常更新の基底管理層である。

層管理やディレクトリ管理が
「どこに置くか」を扱うのに対して、
ここでは
「どう更新するか」を扱う。

## 参照先

- `logs/daily/README.md`
- `meta/layer_management/README.md`
- `meta/directory_management/README.md`
