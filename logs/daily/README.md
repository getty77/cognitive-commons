# Daily Log Rules

`logs/daily/` is the base log layer for storing the day's state differences.

What matters here is not a polished diary entry, but the inputs, interpretations, decisions, and updates that actually moved the OS that day.

---

## Basic Policy

- `daily` stores the day's base log
- By default, append to that day's `YYYY-MM-DD.md`
- Even when there are multiple logs on the same day, prefer appending if they still read as part of the same flow
- Only split into `YYYY-MM-DD.md` plus `YYYY-MM-DD_02.md` and onward when separate phases, topics, or save units make that more natural
- The input can be neat or messy
- Normalize on save into `input / interpret / decide / act / update / current_state / next_state`
- Do not force everything into `daily`; route it elsewhere if another layer is more natural

---

## Accepted Entry Forms

The source input for `daily` may be any of the following:

- a compressed dialogue log
- rough bullet notes
- fragmentary body-sensation notes
- short notes on work blockage or interpersonal friction
- mixed rough notes containing multiple topics

The input does not need to start in a fully structured heading format.
In fact, it is fine to throw it in roughly first and sort it only when saving.

---

## Principles for Sorting Rough Notes

When handling rough notes or mixed inputs, sort them in this order:

1. First check whether there is a state difference worth keeping in that day's `daily`
2. If so, check whether it belongs in the existing log for that day
3. Even on the same day, split into `YYYY-MM-DD_02.md` onward if a separate phase, topic, or save unit would read more clearly
4. If it belongs in `daily`, do not leave it as raw notes; rearrange it into the standard headings
5. If it is more of a dialogue-based clarification than a daily delta, route it to `logs/qa/`
6. If it is mainly derived from books, audio, or video, route it to `logs/reading/`, `logs/listening/`, or `logs/watching/`
7. If it is closer to a reusable local hypothesis than a one-off observation, treat it as a `fragments/` candidate

The goal of sorting is not to reduce input.
It is to place material into a save location where it can be re-ingested later.

---

## What Belongs in `daily`

The following kinds of material fit well in `daily`:

- inputs that changed the day's state
- shifts in interpretation or judgment
- updates that affected the current state, even if small
- differences worth carrying into the next cycle

Even when a new observation is added on the same day, appending is still preferable if it reads as one continuous unit.

By contrast, a separate file is more natural when:

- the phase clearly changed
- the central theme shifted significantly
- even if it came from handoff, appending would blur the save unit
- it will be easier to read later as its own block

By contrast, simple conversation replay, long media-specific reactions, or one-off stray thoughts are often better routed elsewhere.

---

## Editing Posture

- Input may be rough
- Only the saved form needs to be structured
- Do not over-structure it into a narrative
- Keep only the differences that moved the day
- If another layer is more natural, do not force it into `daily`
