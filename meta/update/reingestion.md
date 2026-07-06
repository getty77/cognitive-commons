# Past Log Reingestion Protocol

## Purpose

This protocol defines the safety procedure for reintroducing past diaries or
old `daily`-like records into the current OS.

Past logs are high-value input material, but if they are mixed directly into
the present state, old attractors and old self-images can pull the current OS
off course.

The protocol therefore follows three principles.

- Preserve past logs as history.
- Extract reusable material from them.
- Do not automatically adopt them into the current `current_state`.

---

## Premises

- The canonical form of a past log is a `past_daily` record under its original
  date.
- Treat "what was written then" and "what is adopted now" as separate things.
- Past logs are historical inputs, not proof of the current state.

---

## Input Format

**Canonical format:** Markdown (`.md`) files.

For JSON, CSV, HTML, handwritten diaries, audio, or images, ask an LLM agent to
convert the material to text first, then ingest it through the same procedure.

---

## Basic Procedure

### 1. Preserve it as history

Keep the original text with its original date when possible.

Use `YYYY-MM-DD.md` as the default filename. If there are multiple entries on
the same day, add suffixes such as `_02` and `_03`. Store them under
`logs/past_daily/`.

### 2. Reinterpret it

Re-read the material through the current OS vocabulary using these lenses.

- `input`
- `interpret`
- `friction`
- `update`
- `promotion_candidates`

Do not adopt the old heat or story as-is. Extract only the reusable difference.

### 3. Keep the historical label

When needed, leave notes that indicate:

- this came from a past input
- it depends strongly on the context of that time
- it has not yet been checked against current observations

### 4. Do not auto-adopt

Do not write extraction results from past logs directly into:

- `logs/000_current_state.md`
- immediate updates to existing `playbook` files
- immediate updates to `theory` files

Keep them first as observations or `fragment` candidates.

### 5. Compare with current observations

Connect a past-log extraction to current operation only when at least one of
the following is true.

- The same pattern appears again in recent `daily`, `qa`, or input logs.
- It clearly connects to a current `playbook` or `fragment`.
- It is confirmed as a persistent structure, not merely an old self-image.

---

## Adoption Judgment

### Safe to adopt

- recurring friction
- interpretation patterns that still hold
- observations that connect to current `fragment` or `playbook` files
- long-running relationship or boundary tendencies

### Hold adoption

- self-images that were unusually strong only in one period
- one-off emotional explosions
- text that depends strongly on a past relationship
- narratives that conflict with current observations

---

## Safety Principles

- A past log is not the canonical truth. It is a high-value historical input.
- Do not confuse strong wording with current validity.
- Do not let the strength of an old attractor overwrite the current state.
- Prefer recent observations when updating `current_state`.

---

## Related Destinations

- `meta/update/protocol.md`
- `logs/past_daily/`
- `fragments/`
