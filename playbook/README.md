# Playbook

This directory stores immediate operational rules for running the system in everyday life.

`playbook/` is not where theory is discussed.
It is where the system decides how to behave in response to states.

Playbooks are not summaries of theory.
They may extract usable parts from theory and reconstruct them, but the purpose is different.

## Difference from Theory

`theory/` is the layer for explaining `core/`, expanding concepts, and producing outward-facing conceptual writing.
It emphasizes explainability and generalization, and may become the core of external output.
Within theory, it is natural to separate tightly formed `essay` writing from more update-friendly `operational` writing.

`playbook/`, by contrast, stores practical rules for personal use.
It emphasizes reusability and immediacy over completeness of truth.

Even when a playbook is derived from an existing essay, the goal is not to shorten the prose.
The goal is to convert it into usable criteria, priorities, and fallbacks.

## Difference from Fragments

`fragments/` is the holding layer for local hypotheses emerging from observation.
They are not fixed yet as operational rules.

`playbook/` stores things that already have value as everyday references.
It should make behavior, indicators, and response paths explicit enough to use in the moment.

Playbooks with nearby triggers, complementary roles, or branching relationships may be linked laterally within the same layer.

`playbook/` is normally updated from `logs/` and `fragments/`.
`theory/` may serve as a reference source, but `playbook/` is not a simple digest of theory.

## Difference from Tips

`tips/` stores lightweight hacks and small operational knowledge that can be used immediately.
It prioritizes practical lightness over conceptual closure.

`playbook/` stores rules that include decision principles and trigger conditions, not just tricks.

So even when both are useful knowledge:

- small useful tweaks belong in `tips/`
- things that carry `trigger / indicators / default_response` belong in `playbook/`

## Layer Relationships

- `logs/`:
  state transitions and derived logs
- `tips/`:
  lightweight hacks and small operational know-how
- `fragments/`:
  local hypotheses extracted from observation
- `playbook/`:
  practical rules and behavior guides for personal use
- `theory/`:
  abstract theory explaining and externalizing `core/`

The OS does not jump to theory in one step.
It abstracts gradually from observation.

`logs -> fragments -> playbook -> theory`

This flow prevents raw logs from entering theory directly and promotes only material that has proven useful in operation.

At the same time, there may be a separate lightweight path:

`logs -> tips -> playbook`

Still, `todo / tips / playbook` are usually easier to read not as a single promotion chain but as three adjacent layers of `practice / means / theory`.
In everyday use, it is often more natural to reference a playbook as the background principle, use a tip as the implementation means, and instantiate the current action in `todo`.

This link-based operation can include same-layer links as well as vertical ones.
If one playbook works as a prerequisite or branch of another, it is natural to make that explicit.

`core/` stands outside this promotion chain as a higher-level definition.
It should not be treated as something that grows automatically by stacking playbooks.
Only material that has stabilized in both `theory/` and `playbook/` should be reflected into `core/`, and only carefully.

This promotion chain is part of layer management.
If needed, playbooks may also be demoted from `theory/`, and strongly context-specific material may be relocated into `context/`.

## Layer-Management Criteria Related to Playbook

### fragment -> playbook

Consider promotion when any of the following holds:

- the same kind of observation has appeared three or more times
- `confidence` has reached `medium` or above
- it already has immediate reuse value in everyday operation

“Immediate reuse value” should be considered strong only when at least two of the following are true:

- it can be turned into a concrete procedure for tomorrow
- it directly affects safety, friction reduction, or overload avoidance
- both state recognition and first response can already be written
- it is not just a realization; it clearly changes what to do or not do

### tips -> playbook

Usually it is better to link the relevant tip and playbook than to promote directly.
Promote only when:

- the same tip repeats multiple times
- it can be written as a decision principle rather than a trick
- it is general enough to be reusable even when handed to someone else
- the state-recognition conditions can be written

### playbook -> theory

Consider promotion when any of the following holds:

- the playbook keeps proving effective over time
- common structure becomes visible across multiple `fragment` or `playbook` items
- it can now be written as generalizable theory rather than a local behavior rule

Normally, first organize the bridge concept in `theory/operational/`, then consider whether it should become a new essay.
Do not aim for a tightly formed essay too early.

### playbook -> context

Consider relocation when any of the following holds:

- it depends strongly on a specific family, relationship, or work context
- it reads less like a general operational rule and more like a fixed constraint description
- it does not travel well as an operational rule for others

### playbook -> fragments

Return to `fragments/` when:

- there is a trigger but the default response is still in trial mode
- the activation scene is still rare enough that continued observation matters more than rule formalization
- keeping it in `playbook/` would give it too much authority and make it harder to update

### playbook -> tips

Return or split toward `tips/` when:

- it is conceptually heavier than its actual use
- the trigger is weak, but it is clearly helpful in practice
- turning it into principle would over-authorize it, while holding it as lightweight reusable knowledge keeps it more updateable

Even here, it is often better not to delete the playbook entirely.
More often the playbook should remain as the background principle while the practical implementation is cut out as a tip.
