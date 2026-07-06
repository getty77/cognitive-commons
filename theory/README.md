# Theory

`theory/` holds frameworks you have built and tested — the layer that explains
your `core/` definitions and expands them into forms readable from outside.

It is not a duplicate of `core/`, and not just a longer `playbook/`. Its job is
to explain and conceptualize what your operation has stabilized, and to preserve
abstractions in a form that can be externalized.

Theory does not claim to create meaning from nothing. It reinterprets and
recombines existing structure; what looks like new meaning is usually
reorganization.

## Two centers within `theory/`

- **Essay** — tightly composed conceptual writing: coherent arguments that can
  stand as external pieces. Keep a single essay at the root; once a second is
  needed, `theory/essays/` becomes natural.
- **Operational** (`theory/operational/`) — theory closer to the operational
  layer. More abstract than `playbook/`, but easier to update than a closed
  essay. Use it to summarize common structure across playbooks, bridge `core/`
  and `playbook/`, and grow concepts that may later become an essay.

## Update principles

The usual promotion chain:

`logs -> fragments -> playbook -> theory`

Promotion is one part of layer management. Material may also be demoted from
`theory/` back into `playbook/` or `fragments/`. Within `theory/`, essays
emphasize stability while operational notes update more lightly.

Develop a new central concept in `operational` first, as a bridge. Promote it to
its own essay only once it holds together as a self-standing argument — when it
unifies multiple playbook and fragment items, explains your OS's behavior as a
coherent argument, and reads as a core term rather than a passing buzzword.

`npm run check:essay-candidates` is a lightweight advisory that inspects whether
material in `theory/operational/` looks ready for essay form.

Only concepts that have stabilized in both `theory/` and `playbook/` should be
reflected — carefully — into `core/`.

### A note on metaphor

Strong metaphor vocabularies (physics, geometry, chaos, etc.) can support a
concept but make poor primary terms — foregrounded, they make the text sound as
if it suddenly became about physics. Keep them as internal support and translate
into structural language when writing.
