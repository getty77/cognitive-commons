# Multi-Model Delegation

## Problem

Once you have more than one model available (a cheap fast one, a strong slow one,
a local one, a few specialist APIs), every task provokes the same low-grade
question: which one do I use? Answer it ad hoc and you either burn the expensive
model on trivial work or send hard work to a model that quietly fails. And when
you delegate, it's easy to let the worker's "done" stand as truth.

## Mechanism

Route on two axes, and keep two things at the parent.

**Route by cost tier × how much "non-self" the check needs.**

- **Cheap / local tier** — mechanical transforms, classification, extraction,
  first drafts, bulk work. Anything where quality is checkable by a rule (a test
  passes, a file exists, a value is in range). Loop and retry cheaply; treat the
  output as a *stream of candidates* you triage, not a finished product.
- **Strong tier** — genuine design, hard implementation, analysis that needs to
  hold together. Use sparingly; it's the slow expensive lane.
- **Non-self tier** — when the check needs a perspective your own model
  structurally lacks (see `verify-with-a-different-model`), route to a
  *different* model or a different person, not a bigger version of the same one.

**Keep at the parent, always:**

- **Judgment** — which task goes where, what "good" means, what to adopt.
- **Side effects** — the worker's output is a *proposal*. Any write, commit,
  publish, or delete is confirmed by the parent (read it back, test it, diff it)
  before it becomes real. "The worker said it's done" is not verification.

## Minimal recipe

1. Write a small routing table: task type → tier → why. A dozen rows covering
   your recurring work is enough.
2. Before dispatching, pass the worker not just the prompt but the *relevant
   rule or skill* it needs — don't make it re-derive context you already have.
3. When a cheap worker's quality is shaky, buy quality with retries + a
   mechanical gate rather than by upgrading the model.
4. On return, the parent verifies before any side effect. Never let a delegated
   "done" close the loop unchecked.
5. If you have live per-model usage/quota data, route away from a lane that's
   running low toward one with headroom — delegation is partly quota management.
