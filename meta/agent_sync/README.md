# Agent Sync

This directory stores the canonical sources for operational principles that should be synchronized into external agent environments.

What lives here is not the Cognitive Commons system itself, but the synchronization source used to project parts of it into agent environments.

## Role

- Keep the canonical source for a portable, lightweight operational layer
- Sync shared rules into each agent environment
- Keep repo-specific dense projections separate from portable rules
- Share the skill inventory to external environments under the same logic

## Current Sync Targets

- `portable_ops.md`
  Syncs to each agent environment's `portable-ops.md`
- `spiral_recursive_os.md`
  The canonical dense projection synced to each environment's `spiral-recursive-os.md`
- `meta/skills/README.md`
  The canonical skill inventory synced to each environment's `spiral-skills.md`
- `candidate_criteria.md`
  Criteria for automatically detecting agent-sync review candidates from commit diffs

## Related Layers

- Lightweight shared principles:
  `meta/agent_sync/portable_ops.md`
- Dense repo-specific projection:
  `meta/agent_sync/spiral_recursive_os.md`

## Current Destinations

- `~/.claude/rules/`
- `~/.codex/rules/`

Both are projected from the same canonical source.
More agent environments can be added later if needed.

## Sync Commands

- `npm run sync:agent-projections`
- `npm run check:agent-sync-candidates`

These commands synchronize the three streams:

- `portable-ops.md`
- `spiral-recursive-os.md`
- `spiral-skills.md`

into each agent environment.

`check:agent-sync-candidates` looks at the latest commit diff and reports whether `portable_ops`, `spiral_recursive_os`, or the skill inventory should be reviewed.
