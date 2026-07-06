# Layer Addition Criteria

## Core Criteria

- A type of writing repeatedly gets lost across multiple existing layers.
- Existing layer definitions would need to be stretched unnaturally to hold it.
- Its update frequency or abstraction level clearly differs from existing
  layers.

## Required Conditions When Adding a Layer

Do not create only a receiving directory first.

At minimum, align the following in the same update cycle.

- A README defining the new layer's responsibility
- Criteria for what belongs and does not belong in that layer
- Boundaries with existing layers
- A layer-addition record under `meta/layer_management/`

If the new layer may contain multiple files or child directories, define its
directory responsibility, or at least record why a flat layout is enough for now.

## Notes

Before adding a new layer, check whether `playbook/` or
`theory/operational/` can already absorb the responsibility.

When you want to create `archive/`, first check whether Git history already
serves the purpose.

Only add a thin `archive/` layer if all of the following are true.

- The material is no longer active but still has high repo-internal reference
  value.
- There is a clear reason to preserve it as an old canonical source or
  historical snapshot.
- It does not collide with the responsibilities of other existing layers.
