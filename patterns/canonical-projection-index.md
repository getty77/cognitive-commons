# Canonical / Projection / Index

## Problem

Once you run more than one AI harness (different CLIs, different vendors,
different config formats), the same behavioral rule ends up hand-copied into
several config files. Copies drift. Eventually two harnesses obey different
versions of "the same" rule and nobody notices until behavior diverges —
a dual-canonical bug in your own doctrine.

## Mechanism

Give every piece of doctrine exactly one of three roles:

- **Canonical**: the single source of truth, stored in the user-owned repo.
  Edited here and only here.
- **Projection**: generated copies pushed into each harness's config surface
  (its rules file, system-prompt fragment, memory seed). Never hand-edited;
  regenerating must be cheap and idempotent.
- **Index**: thin always-loaded pointers (see hot/cold split) that tell the
  agent where canonicals live.

Two supporting rules keep the shape honest:

- *Canonical wins.* If a projection diverges (someone hot-fixed a config),
  either lift the change back into the canonical or regenerate over it.
  Never let the fork persist.
- *Don't bake volatile values into projections.* Model names, providers,
  costs, and IDs change too often; projections should reference the
  canonical table that holds them.

## Minimal recipe

1. Pick one doctrine file as canonical; move the real content there.
2. Project it into each harness's format and path. You don't need to write a
   sync tool for this — in the agentic era the projection is a plain-language
   task you hand to an agent, in either direction:
   - *Consolidate:* "crawl each of my harness configs and fold them into this
     canonical file" — collapses existing scatter into one source.
   - *Project:* "from this canonical, write out the config each harness expects"
     — pushes the source back into every harness.
   Claude, GPT, or any capable agent will do it. Shipping no sync script is the
   point, not a gap: there's nothing you have to trust running over your config.
   (If you later want it automatic, wrap the same instruction in a commit hook.)
3. Add a drift check: have the agent (or a diff) compare each projection against
   what the canonical would generate; any mismatch is a bug to reconcile, not a
   local customization.
