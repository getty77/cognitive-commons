# Promotion Criteria

## Core Criteria

- The material is reusable across multiple observations.
- It has become part of an operational or explanatory skeleton, not merely a
  condition-specific note.
- Moving it one layer up clarifies responsibility.
- The benefit of clearer responsibility is greater than the risk of giving it
  too much authority.

## Typical Promotions

### `logs -> fragments`

- The same pattern has been observed multiple times.
- It can be treated as a structural tendency rather than a one-off event.

### `logs -> tips`

- A small practice can be used starting the same day.
- The observation contains lightweight reusable know-how.
- It is not strong enough for `playbook`, but too useful to leave buried in
  `logs`.

### `logs -> todo`

- The observation produces a clear next action.
- It is more natural to hold it as an execution queue item.
- Starting matters more than turning it into knowledge.

### `tips -> fragments`

- A small trick turns out to contain a structural hypothesis.
- Conceptual organization is more useful than preserving it as execution
  know-how.
- The background principle behind the tip should be extracted.

### `fragments -> playbook`

- The hypothesis connects directly to real action.
- It is granular enough to activate in an actual situation.
- It is falsifiable.
- At least the outline of `trigger`, `indicators`, `default_response`, or
  `escalation` is visible.

#### What Counts as Immediate Reuse Value

Even with fewer than three repetitions, a fragment may be a `playbook`
candidate when at least two of the following are true.

- It can be used as a concrete procedure tomorrow.
- It directly improves safety, reduces friction, or helps avoid overload.
- State recognition and first response can already be written.
- It is not just a realization; the difference between doing and not doing is
  clear.

### `tips -> playbook`

Usually prefer cross-linking related `tips`, `todo`, and `playbook` files over
promotion.

Promote only when the background principle behind a tip should become
canonical.

- The small practice repeats.
- It can be written as a concept-level operational rule.
- The outline of `trigger`, `indicators`, and `default_response` is emerging.
- The state-recognition condition can be written.
- It is being reused as a judgment principle, not merely as a local hack.

### `todo -> tips`

Usually delete the completed todo and preserve only the reusable method as a
tip.

- Similar todo items have appeared multiple times.
- The method is more reusable than the task itself.
- Distilling it into lightweight operational knowledge is more natural than
  continuing to preserve todo items.

### `tips -> todo`

Usually this is not promotion. Treat it as link-based operation: consult the
tip and create the current todo from it.

- Knowing the small practice is not enough; it needs to become a concrete
  action now.
- "This makes it easier" needs to become "do this now."

### `playbook -> theory`

- An abstract structure has become visible beyond the local rule.
- It needs language that an outside reader can understand.
- It is worth theorizing as a hypothetical extension.

#### `playbook -> theory/operational`

Consider this move when any of the following are true.

- A common structure across multiple playbooks needs explanation.
- A bridge between playbook and core is needed.
- It is more abstract than a rule, but not ready for an essay.

#### `theory/operational -> new essay`

Consider this move only when all of the following are true.

- A bridge concept can unify multiple playbooks or fragments under one
  principle.
- The concept can explain OS behavior or design philosophy as a coherent
  argument.
- A new essay would be tighter than adding it to an existing essay.
- It can stand as an essay for outside readers, not merely as operational notes.

#### `theory/operational -> narratives`

Consider this move when any of the following are true.

- Multiple operational or playbook items should be bundled as an internal
  reading line, not as an argument.
- Continuity between `core` and later theory needs to be preserved before it
  becomes a definition or essay.
- The internal reading line should be made explicit before writing an essay.

#### `narratives -> essay`

Consider this move only when all of the following are true.

- The narrative line can be reconstructed as an argument readable from outside.
- The essay can stand on its own without exposing the narrative itself.
- The internal reading line has been selected and compressed, not exported
  directly.

#### `new essay -> core candidate`

Consider this move only when all of the following are true.

- The essay's core concept changes the general premise of the OS.
- It is not merely explanatory language for playbook or theory; the whole
  system becomes awkward without it in `core`.
- It is not specific to the operator or to a time-bound term.
- Existing core definitions cannot repeatedly explain the behavior without it.

### `experiments -> interfaces`

- The item is now stable enough to hand to someone else, not merely a trial.
- It has become a reusable procedure or format that does not depend on the
  experiment condition.
- External-facing expression is now the main purpose.

### `experiments -> meta`

- The subject is ongoing management rather than the experiment itself.
- It now concerns canonical sources, sync, or judgment criteria, not a one-off
  connection trial.
- Responsibility is clearer in an operational specification layer than in the
  experiment layer.

### `experiments -> playbook`

- A response that worked in an external trial is reusable as a daily
  operational rule.
- Trigger conditions and responses remain valid even after experiment-specific
  assumptions are removed.

### `experiments -> theory`

- The trial reveals an abstract structure beyond the individual case.
- Applicability or explanatory responsibility now belongs more to theory than
  to an experiment report.
