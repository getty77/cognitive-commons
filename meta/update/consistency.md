# Consistency Contract

## Purpose

This document defines the minimal contract for keeping protocol names, single
reference points, and extraction templates consistent.

Historical logs may keep older wording, but canonical documents and new
templates should follow this contract.

---

## Canonical Naming

Stage names are fixed as follows.

1. `input`
2. `normalize`
3. `interpret`
4. `decide`
5. `act`
6. `update`
7. `archive`

Key names are fixed as follows.

- `input_channel`
- `decision_reason`
- `current_state`
- `next_state`

The following are treated as legacy names.

- `interpretation`
- `decision`
- `action`
- `source_channel`
- `decision_reason` written in Japanese

---

## Single Reference Point for `current_state`

`logs/000_current_state.md` is the single reference point for `current_state`.

Operational rules:

- When `current_state` changes in a `daily` or `transition` entry, sync it in
  the same update unit.
- Keep `last_synced` and `sync_sources` in `logs/000_current_state.md`.
- `last_synced` may use the latest daily reference name, such as `YYYY-MM-DD`
  or `YYYY-MM-DD_02`.

---

## Position of `escalation`

`escalation` is not part of the normal external flow specification.

It may branch from any of the following stages.

- `interpret`
- `decide`
- `act`
- `update`

On return, update `current_state` if needed, then resume the normal cycle.

---

## Checks When Editing

Run `npm run check:protocol` when changing any of the following files.

If local automation is needed, run `npm run setup:hooks` once to enable the
pre-commit hook.

- `README.md`
- `core/*.md`
- `process/*.md`
- `logs/000_current_state.md`
