# Context

`context/` holds operator-specific premises: the constraints, conditions, and
background that are true for *you* but are not general OS definitions.

Keep it separate from `core/`. `core/` is the minimal, generalizable kernel;
`context/` is where the personal and situational corrections live — the things
that shape how the rules apply to your life without belonging in the kernel
itself.

## Good fits

- standing constraints (time, environment, obligations)
- conditional corrections that only apply in your situation
- slow-changing background premises

## Poor fits

- one-off observations (→ `logs/`)
- local hypotheses (→ `fragments/`)
- general principles (→ `core/` or `theory/`)

## Privacy

This layer tends to hold the most personal material. If you publish or share a
fork, review `context/` first — it is the layer most likely to contain things
you did not mean to make public.
