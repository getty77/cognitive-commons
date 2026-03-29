# Skill Inventory

このディレクトリは、
Spiral Recursive OS 由来で管理している Skill 群の目録を置く。

Skill の実体は原則として repo 内 `skills/` を正本とする。
ここでは、

- どの Skill があるか
- repo のどの正本ルールから写像されたか
- どこまで Skill 化済みか

を repo 側から見える形で保持する。

---

## ■ active skills

### `spiral-daily-log-sorter`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-daily-log-sorter/`
- role:
  雑メモ、短い断片、混在入力を
  `logs/daily/` `logs/qa/` `logs/reading/` `logs/listening/` `logs/watching/` `fragments/`
  のどこへ置くか判断し、必要なら保存可能な形へ正規化する
- source_rules:
  - `logs/daily/README.md`
  - `meta/update/protocol.md`
  - `interfaces/cognitive_tools/protocols/chatgpt_log_extraction_protocol.md`

### `spiral-past-diary-reingestion`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-past-diary-reingestion/`
- role:
  過去日記を現在のOS語彙で再読解し、
  `past_daily` と fragment 候補のあいだで安全に扱う
- source_rules:
  - `meta/update/reingestion.md`
  - `meta/update/protocol.md`
  - `logs/past_daily/README.md`

### `spiral-media-reinterpreter`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-media-reinterpreter/`
- role:
  読書・音声・映像由来の入力を
  `logs/reading/` `logs/listening/` `logs/watching/`
  の正規ログへ再読解する
- source_rules:
  - `logs/reading/README.md`
  - `logs/listening/README.md`
  - `logs/watching/README.md`
  - `meta/update/protocol.md`

### `spiral-layer-review`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-layer-review/`
- role:
  ファイルや概念が
  `昇格 / 降格 / 移設 / 層追加 / 層削除`
  のどれに当たるかを査定する
- review_focus:
  - `immediate reuse` の強さだけでなく、責務と更新頻度がその層に合うかを見る
  - `core / narratives / theory / context` の責務境界を見分ける
  - `todo / tips / playbook` を単純昇格列ではなく `実践 / 手段 / 理論` の近接三層として見分ける
  - 必要なら上位概念新設・下位概念新設・既存概念へのリンクを優先する
  - `playbook -> theory/operational -> new essay -> core候補` の境界を見分ける
  - 戻した方が自然なときは降格や移設を優先する
- source_rules:
  - `meta/layer_management/README.md`
  - `meta/layer_management/promotion/criteria.md`
  - `meta/layer_management/demotion/criteria.md`
  - `meta/layer_management/relocation/criteria.md`
  - `meta/layer_management/layer_addition/criteria.md`
  - `meta/layer_management/layer_deletion/criteria.md`

### `spiral-public-candidate-evaluator`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-public-candidate-evaluator/`
- role:
  対象が `public_candidates/` に置けるか、
  置けるなら `cognitive_tool / public_translation / both`
  のどこへ向くかを判定する
- review_focus:
  - 断片や局所原理のままでも価値が立つかを見る
  - 横断統合や神話体系化を促進する導線になっていないかを見る
  - `essay` 生成や `core` 候補化を含まなくても公開価値が立つかを見る
- source_rules:
  - `public_candidates/README.md`
  - `public_candidates/criteria.md`
  - `meta/update/protocol.md`

---

## ■ candidate skills

以下は `meta/skill_migration_inventory.md` に基づく候補である。

- `spiral-collaboration-designer`
  委譲、業務移行、AI 協働、対人支援の場面で、
  判断基準、権限境界、停止条件、追加裁量ラインの設計を点検する候補

---

## ■ relation

- 実行手順の本体は Skill に置く
- 抽象原則の正本は repo に残す
- 候補の棚卸しは `meta/skill_migration_inventory.md` を参照する
