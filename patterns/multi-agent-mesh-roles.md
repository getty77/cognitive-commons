# Multi-Agent Mesh Roles

## Problem

When you run several AI agents together, the naive setup is a pile of
interchangeable "assistants" all doing the same thing. They agree with each
other, nobody's job is to disagree, and it's unclear who is allowed to actually
change anything. Consensus feels productive and produces mush.

## Mechanism

Split by *responsibility surface*, not by vendor or model. A useful minimal
mesh:

- **Implementer** — does the work in an isolated branch/worktree: writes code,
  edits docs, runs tests. Autonomous *within* its branch.
- **Constructive advisor** — proposes designs, names, framings. Advice only; no
  implementation authority.
- **Critical advisor** — actively tries to refute, find holes, and pressure-test.
  Deliberately a *different* temperament (and ideally a different model) from the
  constructive one, so it isn't just agreement in another voice.
- **Orchestrator (you, or your primary agent)** — routes work, integrates
  results, and holds final judgment.

Two rules keep it from turning into either mush or chaos:

- **Advise widely, implement narrowly, adopt singly.** Many voices can weigh in;
  one lane implements; one authority (a human, for anything irreversible or
  outward-facing) decides what merges.
- **Autonomous loops need a stop condition.** If agents reply to each other
  automatically, they will ping-pong forever and burn tokens. Any self-running
  loop must have a hard termination (N rounds, a DONE signal) and a kill switch
  set *before* it starts.

## Minimal recipe

1. Name 3–4 roles by responsibility and write one line each on what they may and
   may not do. Put "merge / adopt / publish" authority in exactly one place.
2. Cast the critical role as a genuinely different perspective — different model
   or different person — not a politer clone of the builder.
3. For any autonomous agent-to-agent loop, write the termination condition and
   kill switch into the setup, then step back. Don't supervise every step; do
   guarantee it stops.
4. Worker outputs are proposals; the orchestrator verifies before side effects
   (see `multi-model-delegation`).
