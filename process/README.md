# Process

## Role

`process/` defines the execution protocol of this OS.

What belongs here is not philosophy,
but the order of operations within each cycle.

---

## Execution loop

This OS runs on the following loop:

1. input
2. normalize
3. interpret
4. decide
5. act
6. update
7. archive

If a risk or anomaly appears that cannot be handled in the normal flow,
the cycle may branch into `escalation` from any stage.

---

## Stages

### 1. input

Receive input.

This stage handles two input channels:

- conversation input
- log input

The responsibility of `input` ends at identifying the input source
and cutting the input into a receivable unit.

### 2. normalize

Convert the two input channels into a common form
that downstream stages can handle.

This is where the density gap between conversation and log input is absorbed.

### 3. interpret

Transform the normalized input bundle into meaning structure.

Only the differences that matter in the current cycle are extracted here.

### 4. decide

Raise multiple action candidates from the interpreted structure
and select one of them.

Branching is handled here.

### 5. act

Execute the action or response selected in `decide`.

`act` is execution-only.
It does not compare or choose candidates.

### 6. update

Convert the execution result into state difference
and update current state and next state.

This is where the update loop closes.

### 7. archive

Save the update result as a compressed record in `logs/`.

The output of `archive` can later be reintroduced as `log input`.

If the current state needs to remain as a single reference point,
sync `logs/000_current_state.md` in the same cycle after archive completes.

---

## Canonical form

The canonical form of this OS is:

"two input channels, one update path."

```text
[input]
├─ conversation
└─ log
↓
normalize
↓
interpret
↓
decide
↓
act
↓
update
↓
archive
```

---

## Input/output principles

- `conversation input` is high-density primary input
- `log input` is low-density, low-cost compressed input
- The update path after `normalize` does not depend on the input source
- `logs` are not the only main input
- `logs` are the output of archive and also a compressed form that can be
  reintroduced when needed
- `logs/000_current_state.md` is the single reference point for current state,
  and should be synced to the latest cycle when updated

---

## Relation to other layers

- `core/` defines what exists and what the OS assumes
- `context/` stores premises, constraints, and conditional risks specific to
  this operator
- `theory/` explains `core/` in an externally readable form
- `process/` defines how the OS runs
- `logs/` store compressed records and reusable context
- `tips/` store lightweight methods reusable from differences
- `todo/` stores the next concrete actions
- `playbook/` can be referenced as background operating principles

In normal use,
`logs diff -> consult tips -> execute todo`
is the main path,
and `playbook/` or `fragments/` are consulted only when needed.

---

## Canonical naming

The following names are fixed for headers and protocol terms:

- `interpret`
- `decide`
- `act`
- `decision_reason`
- `input_channel`

Older forms such as `interpretation`, `decision`, and `action`
may remain in historical logs,
but should not be used in canonical documents or new templates.
