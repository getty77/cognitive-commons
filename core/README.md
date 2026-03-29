# Core

`core/` stores only the upper-level definition of the OS in general.

It is not a place for operator-specific information.
It is also not where immediate procedures or everyday rules belong.

## Role

- Minimal core definition of the OS
- Cognitive model
- Principles
- State transition protocol
- Generalized evaluation functions

## Include

- `os_spec.md`
- `principles.md`
- `spiral_recursive_model.md`
- `temporal_node_field.md`
- `node_evaluation_function.md`
- `state_transition_protocol.md`
- `recursive_cycle.md`

## Do not include

- The operator's profile
- Personal constraints derived from family or work
- Conditional risk history specific to one person
- Immediate rules used in the moment
- One-off observations or local hypotheses

Those belong in
`context/`, `playbook/`, `logs/`, and `fragments/` respectively.

## Update principle

`core/` is not the end point of the normal promotion path.

The normal promotion path is:

`logs -> fragments -> playbook -> theory`

That path is one part of layer management,
and demotion, relocation, layer addition, and layer deletion may also be used.

`core/` sits outside that path and only receives material that has become
stable in both `playbook/` and `theory/`.
