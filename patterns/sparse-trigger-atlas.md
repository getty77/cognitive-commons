# Sparse-Trigger Atlas

## Problem

Doctrine only shapes behavior if it is in context when the situation occurs.
A beautifully written playbook that lives in a file the agent never loads is
inert — "great doctrine, never read, never fires." But loading every playbook
into every session overflows the window. Both failure modes are silent.

## Mechanism

Keep an **atlas**: an always-loaded list of one-line triggers, each shaped as
*situation → action → where the full body lives*. The body stays cold and is
pulled only when its trigger fires.

Example trigger lines (generic forms):

- *About to delete or rename a file* → re-route inbound references first →
  see `<pruning playbook>`.
- *Same tool failed twice in a row* → do not retry a third time; switch
  route or report → see `<retry policy>`.
- *Dispatching work to a subagent* → pass the relevant skill along with the
  prompt; treat output as a proposal → see `<delegation playbook>`.

Discipline: every time you write a new standing rule, add its one-line
trigger to the atlas *in the same change*. A rule without an atlas line is
inert by construction. Conversely, keep triggers to one line — if detail
creeps into the atlas, you are rebuilding the bloat this pattern exists to
prevent.

## Minimal recipe

1. Create one atlas file in the always-loaded surface.
2. Format every entry as `【situation】 action → body-path`, one line each.
3. Add a checklist item to your rule-authoring habit: "atlas line added?"
4. Periodically audit which rules never fired (telemetry or self-report) —
   an unfired trigger is either badly worded or covering a dead rule.
