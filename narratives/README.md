# Narratives

`narratives/` holds the continuity of how concept groups are being read
internally.

It is neither `core/` nor `theory/`.
`core/` handles the minimal kernel,
`theory/` handles externally readable abstractions,
and `narratives/` handles how the whole is internally being tied together.

## Role

- Preserve the line along which fragments, playbooks, and theory are read
- Hold the continuity of the whole as an internal reading before it becomes
  external prose
- Preserve not the raw material before an essay, but the movement of the
  argument itself
- Split out a `core narrative` if only the continuity of `core/` needs to be
  retained

## Include

- The reading line of the whole
- The reading line of the `core/` layer
- Internal connections for how multiple `playbook/` files and
  `theory/operational/` files are tied together

## Do not include

- `core/` definitions themselves
- Finished essays shaped for external reading
- One-off observations or local hypotheses
- Immediate operating rules themselves

## Layer differences

- `core/`
  - the upper definition, minimal kernel, and principles of the OS
- `narratives/`
  - the internal continuity of how those elements connect into a line
- `theory/`
  - prose that maps `core/` and narrative into an externally readable form

## Narrative and core narrative

- `narrative`
  - the continuity of the OS as a whole
  - how fragments, operations, theory, and change are read as one line
- `core narrative`
  - the continuity of the `core/` layer
  - how minimal kernel elements are read in sequence

## Relation to essays

An essay is not a raw publication of `narratives/`.
It is a reconstructed mapping of selected internal reading lines
into a form that can survive external reading.

More precisely,
an essay can be read as the crystallization of the difference between the
current `core narrative` and `narrative`,
rewritten into externally readable prose.
If there is no real difference, a new essay is unnecessary.
If the difference becomes strong, a new essay becomes natural.

So when writing an essay,
it is usually more natural if a narrative line already exists.
Without `narratives/`, the argumentative skeleton of the essay tends to stay
implicit.

Once an essay takes shape,
and something within that difference begins to affect the assumptions of the
OS in general,
it can become a candidate for promotion into `core/`.
The natural order is:

`difference between core narrative and narrative -> essay -> possible core change`

## Narrative-related layer criteria

### `theory/operational -> narratives`

This becomes a candidate when one of the following is true:

- multiple `theory/operational/` or `playbook/` files should be tied together
  as a reading line rather than as a formal argument
- you want to preserve the internal path of an argument before writing an
  external essay
- you want to hold the continuity between `core` and later theory as internal
  continuity rather than as definition or essay

### `narratives -> essay`

This becomes a candidate only when all of the following are true:

- the narrative line can be reconstructed into externally readable prose
- it can be closed as an argument rather than exposing the internal reading
  line as-is
- it can stand on its own as an essay without requiring the narrative file

### `narratives -> theory/operational`

This becomes a return candidate when one of the following is true:

- it is more natural to compress the material into a specific bridge concept
  than to keep it as a reading line
- there are too few elements to justify a narrative, and a single operational
  document is enough
- it is not the continuity of the whole, but only the arrangement of one
  specific theory

### `narratives -> context`

This becomes a return candidate when one of the following is true:

- it looks like a line of the whole, but in practice depends heavily on the
  operator's personal history or conditions
- it is more natural to read it as personal interpretive notes than as
  something that ties concepts together
- keeping it in `narratives/` gives it too much false coherence

## Relation to publishing

This layer is private by default.
Because it has stronger cross-concept binding power than fragments or local
principles, it is usually better not to include it casually in a public
starter kit.
