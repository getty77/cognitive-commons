# Past Daily Logs

This directory stores past diaries, old daily logs, and historical diary entries re-ingested later.

`logs/past_daily/` is a history-only layer, separate from current `daily`.
Entries here are high-value input resources, but they do not connect automatically into the current `current_state` or promotion flow.

## Role

- Preserve past diaries under their original dates
- Keep strong past attractors and self-images available for reference without merging them into the present state
- Serve as the canonical storage location for re-reading through `meta/update/reingestion.md`

## Difference from Current Daily

- `logs/daily/`:
  current operational daily state and fine adjustments
- `logs/past_daily/`:
  past diaries and older daily records reintroduced as historical input

## Principles

- Filenames should generally be `YYYY-MM-DD.md`, with numbering only when there are multiple entries on the same date
- Even when strongly written, entries should not be treated as the present truth or as the canonical source for `current_state`
- If you want to reconnect them to present logic, always pass through `meta/update/reingestion.md`
- Keep titles or summaries inside the body, not in the filename
