# Frontmatter Samples

This file gives copyable frontmatter examples for the main Cognitive Commons
layers.

These are examples, not required schemas. Keep each file as small as the layer
allows. Add fields only when they help future reading, linking, or review.

## `core/example_principle.md`

Use this layer rarely. `core/` is for stable kernel-level definitions, not
normal promotion output.

```md
---
title: "Stable kernel principle"
status: active
kind: core_principle
created: 2026-05-20
source_theory:
  - theory/operational/example_theory.md
linked_core: []
tags:
  - example
---

# Stable kernel principle

## principle

The smallest stable rule that changes how the OS is defined.

## boundary

What this principle does not cover.
```

## `logs/daily/YYYY-MM-DD.md`

```md
---
date: 2026-05-20
input_channel: chat
status: open
tags:
  - daily
---

# 2026-05-20

## input

- What happened or was noticed.

## normalize

- What was cleaned, grouped, or routed.

## interpret

- What this seems to mean.

## decide

- What judgment changed.

## act

- What was done.

## update

- What should be reflected in the OS.

## current_state

- State after this entry.

## next_state

- Next likely action or watch point.
```

## `fragments/example_fragment.md`

```md
---
title: "Short local hypothesis"
status: draft
confidence: low
frequency: 1
created: 2026-05-20
source_logs:
  - logs/daily/2026-05-20.md
related_fragments: []
related_playbook: []
related_theory: []
tags:
  - example
---

# Short local hypothesis

## proposition

One conditional hypothesis extracted from observation.

## observation

What was actually seen.

## implication

What might change if this repeats.
```

## `playbook/example_playbook.md`

```md
---
title: "Operational rule for a recurring state"
status: active
confidence: medium
created: 2026-05-20
source_fragments:
  - fragments/example_fragment.md
linked_playbook: []
linked_fragments:
  - fragments/example_fragment.md
linked_theory: []
tags:
  - example
---

# Operational rule for a recurring state

## trigger

- When to use this playbook.

## indicators

- How the state is recognized.

## default_response

- What to do first.

## fallback

- What to do if the default response fails.
```

## `theory/operational/example_theory.md`

```md
---
title: "Operational theory title"
status: draft
kind: operational
created: 2026-05-20
source_layers:
  - fragments/example_fragment.md
linked_playbook:
  - playbook/example_playbook.md
linked_theory: []
tags:
  - example
---

# Operational theory title

## role

What structure this theory explains.

## core_proposition

The compressed claim.

## operational_structure

- The parts of the structure.

## boundary

- Where this theory should not be applied.
```

## `context/example_context.md`

```md
---
title: "Stable operator-specific premise"
status: active
scope: personal
created: 2026-05-20
review_after: 2026-08-20
related_context: []
tags:
  - example
---

# Stable operator-specific premise

## premise

The fixed or slow-changing condition.

## affects

- How it changes judgment or operation.

## not_for_core

- Why this should stay context-specific.
```

