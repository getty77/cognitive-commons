# Todo

This directory stores items to execute next.

`todo/` is not a knowledge-retention layer.
It is an execution queue.
Here, turning things over matters more than preserving them.
The subject is not “this is how to do it,” but “this is what I will do this time.”

## Role

- `logs/`:
  state differences, raw observation, event records
- `tips/`:
  lightweight hacks and small operational know-how
- `todo/`:
  concrete next actions and execution queues
- `playbook/`:
  concept-level operational rules

## What Belongs in `todo/`

- what to do today
- things to try soon
- actions you want to execute based on `tips`
- next actions triggered by differences in `logs`
- the current concrete instantiation of something derived from a tip

## What Does Not Belong Here

- knowledge that should be preserved long term
- background explanation or theory
- material that remains valuable after completion
- thoughts with weak execution intent

## Operational Principles

- delete from `todo/` aggressively
- once complete, remove it by default
- do not create explicit archives for completed todo items
- refer to Git history if needed
- only distill into `tips/` when a todo recurs or reveals reusable value
- use this priority order: if it is a diff, keep it in `logs`; if it is mainly a reusable method, keep it in `tips`; otherwise delete it

## Subdirectories

- `private/`
  todo items for family, body, emotion, and everyday life
- `work/`
  todo items for client work, meetings, handoff, negotiation, and workplace coordination
- `dev/`
  todo items for development environments, AI collaboration, and implementation workflows

## Usual Flow

The usual flow is:

`logs diff -> consult tips -> execute todo`

In this structure, `todo / tips / playbook` are usually better understood as adjacent layers of `practice / means / theory` than as a simple promotion chain.
In most cases, it is more natural to consult a tip, create a todo from it, and only check the related playbook when needed.

Todo items that are easier to process as a bundle may also be linked laterally.
If execution order, prerequisite structure, or simultaneous handling becomes clearer that way, do not isolate them unnecessarily.

Conceptual layers such as `fragments` and `playbook` are only consulted when needed.

Repeated todo items may be distilled as:

`todo -> tips`

This allows reusable knowledge to be preserved lightly without turning `todo` itself into an archive.

## References

- [`criteria.md`](./criteria.md)
- [`private/README.md`](./private/README.md)
- [`work/README.md`](./work/README.md)
- [`dev/README.md`](./dev/README.md)
