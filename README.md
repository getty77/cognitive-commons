# Cognitive Commons

> Your cognitive infrastructure belongs to you.

A structured OS for personal cognition — Git-based, LLM-agnostic, forkable.

## The problem

Your thinking is scattered across Obsidian notes, chat histories, and AI
system prompts — each in a different format, each locked to a different
platform.

AI companies are racing to store your context on their servers.
The better they know you, the harder you are to move.

## The idea

What if your cognitive structure lived in a Git repo you own?

- Any LLM can read it. Switch models anytime. Your context stays.
- Layer-structured: facts, interpretations, decisions, and hypotheses
  live in separate layers — not mixed in one long document.
- The act of organizing into layers forces clarity.
  It's not just storage — it's thinking infrastructure.

## Structure

```
cognitive-commons/
├── core/          # Stable principles and constraints
├── theory/        # Frameworks you've built and tested
├── playbook/      # Repeatable patterns for recurring situations
├── fragments/     # Hypotheses and loose observations (inbox layer)
├── logs/          # Daily input — the raw feed
├── tips/          # Lightweight operational rules
├── todo/          # Active tasks tied to your thinking
└── context/       # Fixed constraints (time, energy, resources)
```

Each layer has a clear job. Things move between layers as they mature —
fragments become playbook, playbook becomes theory.
What you demote is recorded too.

## How to use it

```bash
git clone https://github.com/getty77/cognitive-commons.git my-os
cd my-os
# Start with logs/ — just write what happened today
# Move things up layers when they earn it
```

Pass your repo (or relevant layers) to any LLM as context.
This is your `.claude`, your `.chatgpt` — model-independent.

## Why "Commons"

Cognitive infrastructure should be a commons.
Not owned by a platform. Not locked behind a subscription.
The template is free. Your instance is yours.

Fork it. Run your own.

## Status

Early. The structure works — it's been running as a personal OS.
Public release is the experiment.

Feedback welcome. Open an issue.
