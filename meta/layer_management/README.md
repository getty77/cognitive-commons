# Layer Management

This directory holds the parent concept for managing the layer structure itself.

`layer_management/` is not just a place for promotion rules.
It separates the principles and history required to preserve the responsibility of each layer by operation type.

## Core Principles

- Layer management is about responsibility separation, not value judgment
- Promotion and demotion are both responsibility adjustments, not failures
- Relocation may be used when a concept needs to move sideways into a different responsibility, not simply up or down
- Concepts may be organized not only through promotion and demotion but also by adding higher concepts, adding lower concepts, or linking to existing concepts
- Layer addition and layer deletion are structural changes; first check whether the existing layers can already absorb the responsibility
- When adding a layer, align layer-management criteria and directory responsibility definitions in the same cycle
- Stronger writing does not automatically belong higher up; only more general writing does
- If something is too concrete for a given layer, it may be moved one level down
- The default operation set is `promotion / demotion / relocation / layer addition / layer deletion`
- Only introduce `split / merge` as independent operations if they cannot be handled as combinations of existing ones
- For historical retention, rely on Git first; add an in-repo `archive` layer only when necessary

## Responsibilities by Layer

### `core/`

- upper-level OS definitions
- minimal kernel models
- principles
- state-transition protocols

### `narratives/`

- internal reading lines
- overall continuity
- core narrative
- internal bundling before essays

### `context/`

- operator-specific premises
- individual constraints
- conditional risks
- profile-like conditions

### `theory/`

- explanation of `core/`
- conceptual expansion
- abstract descriptions readable from outside

### `experiments/`

- trials for external application
- behavior checks in applied settings
- connection experiments
- implementation or operational tests not yet fixed into a formal layer
- may be split into `internal / external / public` when useful
- stable items may be promoted into `interfaces/`, `playbook/`, `theory/`, or `meta/`
- items fixed too early may be moved back from `playbook/`, `theory/`, `interfaces/`, or `meta/`

### `archive/` (only when needed)

- items retired from active operation but still worth keeping inside the repo
- old canonical sources that are hard to follow through Git history alone
- material not ready to delete, but no longer suitable for normal operational layers

This is not meant to be a permanent default layer.
Prefer Git history first, and add it only as a thin layer when clearly necessary.

### `playbook/`

- immediate operational rules
- triggers, indicators, and responses

### `tips/`

- lightweight hacks that work immediately
- small pieces of operational know-how
- locally reusable notes

### `todo/`

- concrete next actions
- execution queues
- lightweight task layers assumed to be deleted when complete

`todo / tips / playbook` are often easier to read not as a simple vertical chain but as three adjacent layers of `practice / means / theory`.
In most cases, linking and cross-reference are more natural than one-way promotion.

### `fragments/`

- local hypotheses
- provisional observational knowledge

### `logs/`

- raw observation
- state transitions
- friction

## Sub-operations

- [`promotion/README.md`](./promotion/README.md)
  Promotion
- [`demotion/README.md`](./demotion/README.md)
  Demotion
- [`relocation/README.md`](./relocation/README.md)
  Relocation
- [`layer_addition/README.md`](./layer_addition/README.md)
  Layer addition
- [`layer_deletion/README.md`](./layer_deletion/README.md)
  Layer deletion

Each operation directory should contain `README.md / criteria.md / log.md`.

## Concept-Link Circuits

Layer management does not have to rely only on simple promotion and demotion chains.
When organizing concepts, it is fine to combine:

- adding a higher-level concept
- adding a lower-level concept
- linking to an existing concept

Links here include not only vertical links but same-layer links as well.
When nearby hypotheses, complementary playbooks, or closely related todos are better kept as peers than merged or promoted, same-layer links are allowed.

This is especially true for near layers such as `todo / tips / playbook` and `core / narratives / theory`, where linking as background principle, implementation means, and practical instance is often more natural than forced vertical movement.

## Layer Management Procedure

1. Describe how the target file is deviating from its current layer responsibility
2. Decide whether the right move is promotion, demotion, relocation, layer addition, or layer deletion
3. If needed, create the receiving file or new layer first
4. When adding a layer, align the README, criteria, log, and required directory responsibility definitions in the same cycle
5. Compress or relocate the original file
6. Record the result in the corresponding operation `log.md`

For everyday commits, `npm run check:pruning-candidates` may be used to surface lightweight pruning candidates in `fragments / playbook / experiments / public_candidates / current_state`.
This is not automatic pruning.
It is only the entry point for broader review or layer-management meetings.

## Current Watch Targets

- `core/temporal_node_field.md`
  If it expands into theory explanation, consider cutting compressed explanation into `theory/`
- `core/node_evaluation_function.md`
  If it grows beyond the minimal evaluation function into operational explanation, consider pairing it with `theory/operational/`
- `playbook/constraint_collision.md`
  If individual household constraints become dominant, move parts back toward `context/identity_constraints.md`
- `theory/spiral_recursive_line_essay.md`
  Keep it as a tightly shaped essay, while continuing to separate operational explanation into `theory/operational/`

## References

- `meta/update/protocol.md`
- `core/README.md`
- `context/README.md`
- `theory/README.md`
- `playbook/README.md`
