# Directory Management

This directory manages when a group of files should be split into directories, and which areas should be reorganized first.

`directory_management/` is separate from layer addition.
It is not about creating new responsibility layers.
It is about deciding when an existing conceptual cluster should be split or re-grouped as file structure.

## Purpose

- Reflect conceptual parent-child relationships in the file structure
- Prevent growing file counts from reducing navigability
- Preserve criteria and execution history so directory growth does not become ad hoc
- Allow directory merges when needed so the structure does not bloat
- Prevent missing directory-responsibility definitions when adding new layers

## Core Principles

- Directory management is not cosmetic cleanup; it is responsibility visualization
- Directory creation and directory merge should be treated as paired operations
- Split when the conceptual parent-child relationship is clear
- If exploration cost exceeds the value of responsibility visibility, consider merging
- Define responsibilities in README first; only create subdirectories if conflict remains after that
- When adding a new layer, review that layer's directory responsibility in the same cycle
- Once an area has been reorganized, remove it from the priority queue and watch for stabilization and the next dense area

## Sub-operations

- [`directory_creation/README.md`](./directory_creation/README.md)
  Directory creation
- [`directory_merge/README.md`](./directory_merge/README.md)
  Directory merge

## Shared Documents

- [`priority_queue.md`](./priority_queue.md)
  Current priorities

## References

- `meta/update/protocol.md`
- `meta/layer_management/README.md`
- `interfaces/cognitive_tools/README.md`
