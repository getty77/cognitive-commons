# Theory

`theory/` is the layer that explains `core/` and expands it into forms that can be read from outside.

The broader theoretical system can be read as beginning with textual theory and then extending into a world-description syntax capable of handling subjectivity, Umwelt, and action.
Within that syntax, `spiral recursive line` functions as a central term.

This is not a duplicate of `core/`.
It is also not simply an expanded version of `playbook/`.

Its two main roles are:

- to explain and conceptualize the core definitions in `core/`
- to preserve the core of abstractions that can be externalized

At the same time, because the theory remains text-theoretical in origin, it does not claim to create meaning from nothing.
Its work is to reinterpret and recombine existing structures.
What appears as the birth of new meaning is therefore better understood as reorganization: existing components are sublated and begin to behave like something new.

## Layer Relationship

- `core/`:
  upper-level definitions, premises, and minimal kernel
- `narratives/`:
  internal reading lines, continuity of the whole, core narrative
- `theory/`:
  explanation of `core/`, conceptual expansion, external-facing conceptual core
- `playbook/`:
  rules used directly in everyday operation
- `context/`:
  operator-specific premises, constraints, and conditional corrections

## Two Main Centers Within `theory/`

Unlike `narratives/`, which keeps the internal line of reading, `theory/` reconstructs that material into a form that can be read externally.
In particular, an `essay` may be read as the crystallization of the difference between the current `core narrative` and `narrative`, rewritten as outward-facing argument.

### 1. Essay

Tightly composed conceptual writing: coherent arguments, structured longer texts, and pieces that can stand as external writing.

Example:

- `theory/spiral_recursive_line_essay.md`

An existing essay does not always need to remain the mothership that accumulates every later concept.
If it already stands as a closed argument from a specific point in time, it is often more natural to start a new essay for a new central concept rather than endlessly revising the old one.
When there is only one essay, keeping it at the root is fine.
Once a second essay is needed, creating `theory/essays/` becomes natural.

### 2. Operational

Theory closer to the operational layer.
More abstract than `playbook/`, but easier to update than a closed essay.

This layer is useful for:

- summarizing common structure across multiple playbooks
- holding material that changes frequently but should not remain a mere rule list
- providing an explanatory bridge between `core/` and `playbook/`
- connecting to `context/` when necessary without substituting context for theory
- growing concepts that may later become the kernel of a new essay
- preserving draft chapter structures or argument spines for future essays in an update-friendly form

## Update Principles

The usual promotion chain is:

`logs -> fragments -> playbook -> theory`

Promotion is only one part of layer management.
If needed, material may also be demoted from `theory/` back into `playbook/` or `fragments/`, or relocated into `context/`.

Within `theory/`, however, `essay` emphasizes stability while `operational` can be updated more lightly.

When a new central concept begins to form, first develop it in `operational` as a bridge concept.
Only once it becomes tight enough should it become a new essay file.
The existing essay does not have to serve forever as the main revision vessel.
In that sense, `operational` is not a holding pen but a structural layer for growing the future skeleton of an essay.

Conversely, if an essay does not yet hold together as an essay, it may be moved back into `operational`.
And if operational material turns out to be closer to a local rule than to theory, it may return to `playbook/`.

Signs that a new essay is warranted include:

- a bridge concept in `operational` can unify multiple `playbook` and `fragment` items under one principle
- the concept can explain OS behavior or design philosophy as a coherent argument
- a separate essay would be more conceptually sound than appending to an existing one
- the piece can stand externally as an essay rather than as operational notes
- the concept is likely to remain a core term rather than a temporary buzzword

If these conditions are not met, it is better to remain in `operational` or move back to `playbook/`.

As a lightweight advisory, `npm run check:essay-candidates` may be used to inspect whether material in `theory/operational/` looks ready for essay form.

When actually writing a new essay, it is fine to use `theory/spiral_recursive_line_essay.md` as a stylistic reference even if the content is new.
Useful inherited protocols include:

- state the problem clearly at the beginning
- move the argument forward one layer at a time
- recover metaphors into structural language by the end
- rewrite operational vocabulary conceptually rather than listing it raw
- preserve the openness of a draft essay

Strong metaphor vocabularies also need care.
Terms such as:

- `quantum mechanics`
- `fractal`
- `chaos theory`
- `event horizon`

may work well as background support or internal metaphor, but if they move too far into the foreground they can create noise by making the text sound as if it has suddenly become about physics or geometry.

It is often better to keep such vocabulary in notes or internal support boxes and translate it into structural language when writing essays or narratives.
A term can be a powerful metaphor without being a good primary concept term.

The theoretical promotion path is usually read as:

`playbook -> theory/operational -> new essay -> core candidate`

- `operational`:
  growth of bridge concepts
- `new essay`:
  self-standing core theory
- `core candidate`:
  only the subset that may eventually affect upper-level OS definitions

The natural reading order is:

`core narrative -> narrative -> essay -> core candidate`

In this sense, an essay is not just a longer text.
It is a projection of the difference between the current `core narrative` and `narrative` into a form that can survive external reading.
If the difference is weak, a new essay is unnecessary.
Only when the difference becomes strong does a new essay become justified.

Material that has not even reached essay form should normally not enter `core/`.
Conversely, concepts that have become self-standing enough for a new essay are often closer to future `core/` review candidates.

`core/` remains an even more external upper definition layer.
Only things that have stabilized in both `theory/` and `playbook/` should be reflected there, and only carefully.
