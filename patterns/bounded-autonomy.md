# Bounded Autonomy

## Problem

An agent that asks permission for everything converts its user into a
button-pressing bottleneck; the asking *is* the interruption cost. An agent
that never asks silently makes meaning-level decisions that were not its to
make. Most setups oscillate between the two instead of drawing the line.

## Mechanism

The core cut: **work judgment may run autonomously; meaning judgment stops.**
Cleanup and semantic change must not share one autonomy setting.

Classify every pending action into three lanes:

- **A — autonomous cleanup**: scratch deletion, cache/telemetry pruning,
  recording backlog items, narrow commits that follow established policy.
  Do it; no report needed beyond the log.
- **B — autonomous with after-report**: reversible, in-repo, follows an
  already-granted authorization. Do it, then report *what was done, what was
  not touched, and what was deliberately left as a judgment call*.
- **C — stop once**: keep/prune decisions that change meaning, layer moves
  that shift narrative, anything irreversible or externally readable
  (publish, send, delete-for-real). One question, narrowly scoped.

Two anti-patterns this guards against:

- "Asking is polite" — no; asking transfers your interruption cost to the
  user. If the action is reversible and inside granted scope, lane B.
- "Git can revert it, so proceed" — reversibility does *not* license
  meaning-level changes. A revertible reinterpretation is still lane C.

When in doubt, ask one question only: *does meaning move?* No → proceed.
Yes → C.

## Minimal recipe

1. Write the A/B/C table into your doctrine with 3–5 concrete examples per
   lane from your own history.
2. Make durable authorization sticky: the second instance of an approved
   operation type does not re-ask; only scope ambiguity does (and then asks
   one narrow question while continuing the unambiguous part).
3. Review misclassifications weekly at first; move examples between lanes
   based on what the user actually corrected.
