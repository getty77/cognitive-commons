# Context

`context/` stores premises, constraints, profiles, and conditional risks
that are specific to the operator of this OS.

This is not `core/`.
`core/` defines the upper-level structure of the OS in general,
while `context/` holds conditions specific to this particular operator.

## Role

- Keep foundational profile information
- Organize constraints that shape behavior
- Hold conditional risk adjustments referenced only when relevant
- Describe tendencies specific to the operating subject

## Difference from `core/`

- `core/`:
  the minimal upper-level definition of the OS, its model, principles,
  and protocol
- `context/`:
  premises, constraints, tendencies, and conditional adjustments that are
  specific to this operator

`narratives/` is separate from this as well.
`context/` handles conditions and constraints,
whereas `narratives/` handles the internal continuity of how concept groups
are being read.

The contents of `context/` matter,
but they are not the general structure of the OS itself.
They therefore do not belong in `core/`.

## Include

- `foundation_context.md`
- `bias_profile.md`
- `identity_constraints.md`
- `risk_conditions.md`

## Do not include

- Generalized cognitive models
- State transition protocols
- The spiral recursive model itself
- One-off observational logs
