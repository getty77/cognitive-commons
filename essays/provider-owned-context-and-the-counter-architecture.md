# Your AI context is becoming provider-owned infrastructure. Here's the counter-architecture.

Every serious AI product is now racing to remember you. Memory, preferences,
history, the working context that makes the assistant feel like *yours* — it's
the feature of the year, and it's genuinely useful. It's also the lock-in.

The framing worth pushing: **the durable context an AI holds about you is
infrastructure, and right now it's being built as provider-owned infrastructure.**
That's a different risk than "the model might be wrong." A wrong answer is
visible and correctable. Provider-owned context is invisible and compounding —
the better the system knows you, the more it costs to leave, and the harder it
is to audit what it's actually optimizing you toward.

## Why this is the load-bearing risk

Three properties stack:

1. **Ownership.** Your context lives on servers you don't control. You are a
   tenant of your own history.
2. **Opacity.** You can't see the ranking objective, the retention policy, or
   how your context shapes what you're shown next.
3. **Non-portability.** "Export" is usually a dump you can't practically
   re-import elsewhere with its relational continuity intact.

Put those together and the feeling of "I decided this myself" stops being
evidence that you did. When a provider holds your context *and* shapes your
next input, agency lives in the editability and portability of that context —
not in the felt sense of choosing. This is the quiet part of the alignment
problem that isn't about the model at all. It's about who owns the substrate.

## The counter-architecture is boring on purpose

The answer doesn't need to be clever. It needs to be *yours*:

- Keep the durable context in a **repo you own** — plain files, Git-tracked.
- Make it **LLM-agnostic**: any model can read it, you can switch anytime.
- **Project least-privilege views** to providers instead of exposing total
  memory.
- Keep the **exit real**: you can fork it, move it, delete it, run without a
  provider.

This repo, **Cognitive Commons**, is a minimal public kernel cut out of a
personal version run for months — a small, forkable Git repo that holds the
context your AI interprets, on your side of the line. It's intentionally tiny:
layers for observations → hypotheses → rules → theory, a handful of field-tested
operating patterns, and a bootstrap that ingests the writing you already have
(chat logs, notes, a vault) into a structure you own.

It ships no automation and no clever ingestion prompt — deliberately. A repo
whose whole claim is "don't hand your context to a system you can't inspect"
would contradict itself by shipping a script you have to trust. The absence of
anything to trust *is* the design.

## What this actually argues

Not "distrust AI." The opposite: as these systems get more useful, the context
layer becomes more valuable, and value is exactly what gets captured. The move
is to make the context layer **user-owned and forkable before the lock-in
sets**, not after. Cheap to do now, expensive to retrofit later.

This is a template, not a product — fork it, gut it, keep the shape. The point
was never the specific files. The point is that your context should be readable,
inspectable, and movable, and that this is a property you can still choose to
have.
