# Update Protocol

## Purpose

This protocol defines the update path from observation to operational rules,
theory, and externalization. It also defines when `core/` should be reviewed.

The purpose of updating is not to preserve consistency for its own sake. The
purpose is to reflect observed drift back into structure.

---

## Update Path

The basic path is:

1. Describe the phenomenon in `logs/`.
2. Extract recurring tendencies into `fragments/`.
3. Turn reusable behavior into `playbook/`.
4. When useful, conceptualize or externalize it in `theory/`.
5. Reflect only stable material into `core/`, and do so carefully.

If you later want layers for publication candidates, external-facing tools, or
experiments, add them when you actually need them — the kernel does not ship
empty ones.

If something was fixed too early, it may move back down a layer for another
trial.

---

## What to Update

### `logs/`

Use this layer for:

- raw observations
- state transitions
- anomalies and friction

Do not over-explain here. Preserve the phenomenon first.

### `core/`

Use this layer for:

- upper-level OS definitions
- operational premises
- minimal kernel models

`core/` is not the normal promotion target. Reflect material into `core/` only
when it has stabilized through repeated use in `theory/` and `playbook/`.

### `context/`

Use this layer for:

- operator-specific premises
- family, work, life, and other conditional constraints
- risk adjustments that are consulted conditionally rather than constantly
- stable tendencies or profile-like conditions

`context/` is important, but it is not a general OS definition. Do not mix it
into `core/`.

### `theory/`

Use this layer for:

- explanation and conceptualization of `core/`
- writing that can be read from outside
- abstract descriptions that may become external output
- hypothetical extensions

> If you add external-facing layers of your own (experiments, publication
> candidates, interfaces), the same promotion/return logic applies to them:
> promote when something stabilizes, return it when it was fixed too early.

---

## Update Triggers

Consider an update when any of the following appears.

- The same tendency appears multiple times.
- Existing specifications no longer explain the output.
- External friction appears clearly.
- Stability conditions change.
- Existing vocabulary no longer fits the phenomenon.

---

## Update Procedure

### 1. Describe

Start by writing in `logs/`. Do not theorize too early.

The entry does not need to be clean at the start. Rough notes, fragmentary
bullets, short body-state notes, or mixed scratch notes are acceptable as long
as they are routed into proper layers when saved.

### 2. Extract

Distinguish one-off phenomena from recurring tendencies.

When a log is finalized, it is enough to identify whether there are candidates
for `fragment`, `playbook`, `theory`, or `context`.

For external connections, applied uses, or tooling that are still more
experimental than canonical, hold them in a layer of your own until they
stabilize.

When reintroducing past diaries or old notes, follow
`meta/update/reingestion.md` and treat them as historical inputs.

For rough or unsorted notes, first use the criteria in `logs/daily/README.md`
to extract the day's meaningful differences. Then route dialogue compression
to `logs/qa/`, media-derived input to `logs/reading/`, `logs/listening/`, or
`logs/watching/`, and recurring hypotheses to `fragments/`.

If layer responsibility is unclear, consult `meta/layer_management/README.md`.
Review promotion, demotion, relocation, layer addition, and layer deletion.

When adding a layer, align the README, criteria, log, and required directory
responsibility definitions in the same cycle.

If parent-child relationships or directory grouping are unclear, review whether
directory creation or consolidation is needed. If a directory is moved or
consolidated, check in the same cycle that no empty directories remain.

When you want to preserve history in the repo, first check whether Git history
is sufficient. Add an in-repo `archive/` layer only when clearly needed, and
keep it thin.

### 3. Compare

Check whether the material contradicts or supplements existing `playbook/`,
`theory/`, or `context/` files.

When touching `core/`, separately verify whether the change truly affects the
upper-level definition.

### 3.5. Layer-Management Judgment

Do not decide layer management in one step. Use two stages.

1. During `daily` or `QA` finalization, mark candidates.
2. Every few days, run a light review and make the actual decision.

This preserves candidates while context is fresh, while reducing overreaction
to one-off intensity.

### 4. Rewrite

First decide whether the update belongs in `playbook/`, `theory/`, or
`context/`.

Update `core/` only for changes that are stable in both `theory/` and
`playbook/`.

If a file is in a layer whose responsibility does not fit, prefer moving it
downward or sideways over forcing it to stay.

When protocol naming or `current_state` operation is affected, read
`meta/update/consistency.md` and run `npm run check:protocol`.

If external agent rules or skills may need review, edit the relevant canonical
documents and run `npm run check:agent-sync-candidates`.

If skill extraction or public-candidate extraction may be relevant, run
`npm run check:expansion-candidates`.

If you want to check that staged files have at least minimal link structure,
run `npm run check:linking-candidates`.

If you want lightweight pruning candidates from commit diffs, run
`npm run check:pruning-candidates`.

To run the bundled advisory checks, run `npm run check:review-candidates`.

If local automation is needed, run `npm run setup:hooks` first.

The pre-commit hook may run both `check:protocol` and
`check:linking-candidates`.

All review scripts are advisory. They do not automatically move, delete, or
approve files.

`check:linking-candidates` is also advisory. It checks only whether minimal
links exist, not whether the links are good.

When a reminder appears during a commit cycle, do not treat it as automatic
review. Use it as an entry point for one of three decisions:

- reflect the advisory now
- close it as a pass after inspection
- defer it to a later review

### 5. Implement or Translate

If the material is applicable but still experimental, hold it in a trial layer
of your own. Once the trial quality fades and the stable responsibility becomes
clear, promote it into `playbook/`, `theory/`, or `meta/`.

---

## Update Judgment Criteria

- Is this a one-off record or a persistent structure?
- Is this an explanation of the phenomenon, or only a metaphor?
- Would compression make it clearer than adding more text?
- Would it still make sense when externalized?

---

## Log Classification

- `logs/daily/`: normal observation, daily state, fine adjustment — the default.

`logs/daily/` is the only log lane the kernel ships. If you want specialized
lanes — for phase shifts, anomalies, or media-derived input (reading, listening,
watching) — add them as sibling directories when you actually need them; don't
create empty ones up front.

`logs/` may include raw observation as well as later-derived logs. When a log
is derived, state the source and preserve the connection to the original
observation.

If unsure:

- use `daily/` for the main daily state record
- use `past_daily/` for historical past diaries
- use `reading/` for canonical reading input
- use `listening/` for canonical audio input
- use `watching/` for canonical video input

For `reading`, `listening`, and `watching` input logs, use
`YYYY-MM-DD_title.md` by default. If there is a URL, use a title that can be
verified from the linked source.

When reintroducing past diaries, keep the original date and treat
`past_daily/` as canonical. Use `YYYY-MM-DD.md` by default, with suffixes only
when multiple entries exist on the same date.

---

## When Not to Update

It is acceptable to hold observation without updating when:

- it is one-off and not reproducible
- it is strongly state-dependent and cannot be structured
- existing descriptions already handle it well enough
- verbalization is likely to distort the phenomenon

---

## Principle

Updating does not mean protecting existing descriptions.

Updating means giving observed drift a more reusable structure.

The normal promotion path is:

`logs -> fragments -> playbook -> theory`

`core/` sits outside that path as an upper-level definition. It should receive
only stable repetition, and only carefully.
