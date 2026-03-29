# Fragments

This directory stores local hypotheses that arise from observation.

`fragments/` is the holding layer between `logs/` and `playbook/`.
It is where observations are not yet fixed as theory,
but are tested for whether they deserve reuse.

## Role

- `logs/`:
  state transitions, events, situational records, and derived logs
- `tips/`:
  lightweight hacks and small operating know-how
- `fragments/`:
  local hypotheses, conditional insights, and candidate definitions extracted
  from observation
- `playbook/`:
  immediate rules used in everyday operation
- `theory/`:
  explanation of `core/`, conceptual expansion, and outward-facing writing

## Writing policy

- Write as observable structure, not as diary prose
- Treat items as conditional hypotheses rather than declarations
- Keep track of which `logs/` they come from
- Note which `playbook/` or `theory/` they connect to
- When useful, make same-layer links to other fragments
- Move back and forth with `tips/` for practical testing

`fragments/` is a holding layer,
but it does not need to become a pile of isolated notes.
Fragments that are related, mutually reinforcing, or mutually falsifying can
be linked laterally.
Sometimes building a network of fragments is more natural than forcing an
early abstraction.

## Fragment-related layer criteria

### fragment -> playbook

This becomes a candidate when one of the following is true:

- the same pattern has appeared three times or more
- `confidence` has reached at least `medium`
- it has immediate reuse value in daily operation

"Immediate reuse value" should be treated as strong only when at least two of
the following are true:

- it has already become a concrete procedure you could consult tomorrow
- it directly improves safety, reduces friction, or helps overload avoidance
- the state and first response can already be described
- it is not just a realization; the difference between do / do not do is clear

### fragment -> tips

This becomes a candidate when one of the following is true:

- you want to run it first as a small practical test of the hypothesis
- it works better as lightweight operational knowledge than as concept
  organization
- you want more supporting material for the fragment

### fragment -> theory

Fragments should not move directly into theory.
In principle, they should first be operated through `playbook/`,
and only what remains effective over time should become a `theory/` candidate.

`core/` is a further outer layer of definition.
Only theory that begins to affect the OS kernel should be reviewed there.

### fragment -> logs

It is acceptable to return from fragment form back to observation in `logs/`
when one of the following is true:

- it was driven too strongly by a one-off intense experience
- repeated observation did not increase, and it remains weak even as a local
  hypothesis
- continued observation is more natural than hypothesis formation right now

### fragment -> context

It is more natural to relocate a fragment into `context/` when one of the
following is true:

- it depends heavily on family, a specific person, or a specific job
- its meaning collapses without knowing the operator's profile
- it is closer to a note about fixed conditions than to a portable hypothesis

## Metadata

Each fragment may include the following fields at the top:

- `title`
- `status`
- `confidence`
- `frequency`
- `source_logs`
- `last_updated`
- `related_fragments`
- `related_playbook`
- `related_theory`
