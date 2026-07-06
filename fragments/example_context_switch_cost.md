---
title: "The felt cost of a context switch is decoupled from its real cost"
status: draft
confidence: low
frequency: 1
created: 2026-01-15
source_logs:
  - logs/daily/2026-01-15.md
related_fragments: []
related_playbook: []
related_theory: []
tags:
  - example
  - attention
---

# The felt cost of a context switch is decoupled from its real cost

> Example fragment. This shows what a distilled hypothesis looks like — one
> claim, its grounding observation, and what would raise its confidence. Delete
> it once you have your own.

## proposition

Each individual context switch feels nearly free in the moment, but the cost is
real and shows up only in aggregate output. Because the per-switch feeling is
decoupled from the aggregate cost, nothing internal stops you from switching
dozens of times.

## observation

A morning spent alternating between writing and answering messages produced
almost nothing; an afternoon with messages closed produced more than the whole
morning (`logs/daily/2026-01-15.md`).

## implication

If this holds, the intervention is structural, not willpower-based: remove the
switch opportunity (close the channel) rather than resolve to switch less.

## what would raise confidence

- The same pattern recurring across several days (bump `frequency`).
- A day where a deliberate no-switch block measurably changed output.

If it recurs and holds, this is a candidate for promotion into `playbook/` as a
repeatable rule.
