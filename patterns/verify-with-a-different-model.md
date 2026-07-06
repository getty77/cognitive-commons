# Verify With a Different Model

## Problem

A model reviewing its own output is the weakest possible check. It shares every
blind spot with the work it's reviewing — the same training biases, the same
missing context, the same confident wrong assumptions. "I checked it myself" from
a single model (or a single person deep in the work) mostly re-confirms what's
already there. Errors that survive are exactly the ones self-review can't see.

## Mechanism

When a check needs to catch what the author can't, the reviewer must be
*decorrelated* from the author — a different model family, or a different person,
not a second pass by the same one.

- **Cold review** (catch mistakes) → a *different model*. Its different blind
  spots surface what yours hid.
- **Subject review** (is this the right thing at all) → a *different person*. A
  different stake and context, not just a different model.
- **Cheap parallel reads** (just more eyes on simple material) → same model is
  fine; you're not relying on decorrelation, just throughput.

The deeper principle: a single reviewer's bias never reaches zero, but stacking
*independent* reviewers pulls the aggregate toward center. What matters is not
the number of reviewers but their *correlation* — five reviewers echoing one
source is one reviewer. Add decorrelated eyes, not more of the same.

## Minimal recipe

1. For anything you'd regret being wrong about, add one review pass from a model
   in a *different* family than the one that produced it.
2. For "is this even the right direction," get a human with different stakes to
   look — that's a different axis than model diversity.
3. Don't launder correlation: if every reviewer is drawing on the same source or
   the same model, you have one opinion wearing several hats. Check independence
   before trusting agreement.
4. Reintegrate as a *delta* — what changed, what held, what you dropped — not by
   pasting the reviewer's raw output back in.
