# Skill Inventory

This directory stores the inventory of Skills managed as part of Cognitive Commons.

The canonical Skill implementations themselves are stored in the repo-local `skills/` directory.
This inventory exists so the repo can visibly track:

- which Skills exist
- which canonical rules in the repo they are projected from
- how far the skill migration has progressed

---

## Active Skills

### `spiral-daily-log-sorter`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-daily-log-sorter/`
- role:
  Decide whether rough notes, short fragments, or mixed input belong in `logs/daily/`, `logs/qa/`, `logs/reading/`, `logs/listening/`, `logs/watching/`, or `fragments/`, and normalize them into savable form when needed
- source_rules:
  - `logs/daily/README.md`
  - `meta/update/protocol.md`
  - `interfaces/cognitive_tools/protocols/chatgpt_log_extraction_protocol.md`

### `spiral-past-diary-reingestion`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-past-diary-reingestion/`
- role:
  Re-read past diaries through the current OS vocabulary and handle them safely between `past_daily` and fragment candidates
- source_rules:
  - `meta/update/reingestion.md`
  - `meta/update/protocol.md`
  - `logs/past_daily/README.md`

### `spiral-media-reinterpreter`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-media-reinterpreter/`
- role:
  Reinterpret reading-, audio-, and video-derived input into normalized media logs
- source_rules:
  - `logs/reading/README.md`
  - `logs/listening/README.md`
  - `logs/watching/README.md`
  - `meta/update/protocol.md`

### `spiral-layer-review`

- status: active
- path: `/Users/rac77/Documents/Spiral-Recursive-OS/skills/spiral-layer-review/`
- role:
  Evaluate whether a file or concept should be promoted, demoted, relocated, added as a layer, or deleted as a layer
- review_focus:
  - look beyond immediate reuse and ask whether the responsibility and update frequency fit the layer
  - distinguish the boundaries between `core / narratives / theory / context`
  - treat `todo / tips / playbook` as adjacent layers of `practice / means / theory`, not just a promotion chain
  - prefer adding higher concepts, lower concepts, or links to existing concepts when appropriate
  - distinguish the boundary from `playbook -> theory/operational -> new essay -> core candidate`
  - prefer demotion or relocation when moving back is more natural
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
  Judge whether something belongs in `public_candidates/`, and if so whether it points toward `cognitive_tool`, `public_translation`, or `both`
- review_focus:
  - ask whether value stands even as a fragment or local principle
  - avoid pipelines that unintentionally encourage mythic over-integration
  - ask whether publication value stands even without essay generation or core candidacy
- source_rules:
  - `public_candidates/README.md`
  - `public_candidates/criteria.md`
  - `meta/update/protocol.md`

---

## Candidate Skills

The following are tracked as candidates based on `meta/skill_migration_inventory.md`.

- `spiral-collaboration-designer`
  A candidate for reviewing judgment criteria, authority boundaries, stop conditions, and discretionary lines in delegation, handoff, AI collaboration, and interpersonal support settings

---

## Relation

- Put executable procedures into Skills
- Keep abstract principles as canonical repo documents
- Use `meta/skill_migration_inventory.md` for candidate inventory
