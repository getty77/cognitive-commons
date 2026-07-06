# Provider-Owned Context Risk

## Problem

A persistent, context-aware AI gets more helpful the more of your context it
holds: memory, preferences, life history, working state, personal rules. That
same accumulation is the lock-in. When the durable context lives on the
provider's servers, "more helpful" and "harder to leave" are the same curve.
The risk is not bad answers — it is that your cognitive infrastructure quietly
becomes provider-owned.

This is the risk the kernel exists to counter; this pattern makes the argument
explicit so you can audit any system against it.

## Mechanism

Convenience is not the axis that matters. The axis is *where five things live*:

- **Ownership** — is the context yours or the provider's?
- **Portability** — can you move it, with its relational continuity intact?
- **Editability** — can you rewrite your own history and rules?
- **Refusal** — can you pause, partially withhold, run in a no-provider mode?
- **Exit** — can you leave, and what does leaving cost?

The failure chain:

```text
provider-owned memory
  + relationship continuity
  + recommendation/ranking you can't see
  + switching friction
  → convenience → dependency → context lock-in → substrate-edited agency
```

The last link is the load-bearing one: when the provider holds your context
*and* shapes what you see next, the feeling of "I decided this myself" is no
longer evidence that you did. Agency lives in the editability, portability, and
refusability of your context, not in the felt sense of choosing.

## Detection signatures

Audit any persistent AI against these questions:

1. Are you the *owner* of your context, or a *tenant*?
2. How high is the cost of losing it? (That cost is the lock-in, measured.)
3. Is portability *nominal* (an export button) or *real* (semantic continuity
   you can actually reuse elsewhere)?
4. Is relationship continuity a *user asset* or a *provider moat*?
5. How far do refusal, export, deletion, and editing actually reach?

Red flags: export produces a dump you can't practically re-import; the ranking
or recommendation objective is invisible; memory-retention policy is opaque;
"switching cost" is discussed only as UX, never as sovereignty.

## Counter-architecture (the defense)

- Keep durable context in a repo you own; project *least-privilege* views to
  providers rather than exposing total memory.
- Use provider-agnostic formats; keep the semantic structure editable.
- Make exit real: sleep, distance, partial refusal, deletion, and a
  no-provider mode that still works.

The kernel this repo describes is one implementation of that counter-
architecture. The point is not this specific tool — it is that the context
layer should be user-owned and forkable rather than platform-bound.
