# Update Management

This directory gathers the canonical documents related to how the repo is updated as a whole.

It covers things such as:

- saving into and routing within `logs/`
- re-ingesting past diaries
- maintaining consistency

In other words, it governs the daily update paths themselves.

## Sub-documents

- [`protocol.md`](./protocol.md)
  The base protocol for log classification, saving, and updates
- [`reingestion.md`](./reingestion.md)
  Procedures for re-ingesting past diaries
- [`consistency.md`](./consistency.md)
  Consistency contracts among canonical documents

## Position

`meta/update/` is the foundational operational layer for day-to-day updates, sitting before `layer_management/` and `directory_management/`.

Layer and directory management answer where something should be placed.
This layer answers how updates should happen.

## References

- `logs/daily/README.md`
- `meta/layer_management/README.md`
- `meta/directory_management/README.md`
