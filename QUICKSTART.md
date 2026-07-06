# Quickstart — Bootstrap from your own corpus

You don't start this repo from an empty page. You start it from the writing you
already have, scattered across places you don't own: tweet archives, LLM chat
logs, a diary, an Obsidian vault, exported notes. The kernel's job is to give
that pile a spine — and to move it somewhere you own and can carry.

This takes about ten minutes for a first pass.

## Two ways in

- **Bring a corpus** (below) — you already have scattered writing (tweets, chat
  logs, diary, a vault). Hand it over and the kernel gives it a spine.
- **Get interviewed** (further down) — you have thoughts but little written down.
  Have your agent interview you, and the conversation itself becomes your first
  layers.

Both produce the same layered, user-owned markdown. Both are just a conversation
with an agent you chose — no script, nothing to trust (see the trust note).

## The idea

Your context already exists; it's just fragmented and provider-held. Bootstrapping
is one ingestion pass that reads your corpus and routes each piece into a layer,
producing plain markdown you own and git-track. The layers (see the main README):

- `logs/` — raw observations, dated. What happened, verbatim-ish.
- `fragments/` — distilled propositions. One idea per file, reusable.
- `theory/` — stable structure that many fragments converge on.
- `core/` — the few kernel-level principles that define how *your* OS works.

You do not need all of them on day one. Most first passes only fill `logs/` and
a handful of `fragments/`.

## Steps

There is nothing to install and no script to run against your data. The whole
operation is: hand your corpus to an agentic AI you already use, and ask it to
rewrite the text into this repo's layers, one file per responsibility.

1. **Bring your corpus.** Point your agent at the raw text — tweets, chat
   exports, diary entries, vault notes. No preprocessing needed.
2. **Ask it to rewrite by responsibility.** In your own words, tell it: read
   this, and rewrite it into my repo's layers — dated observations go to
   `logs/`, ideas that recur or stand alone become one `fragment/` each, drop
   filler, and list what you dropped. The transformation is that simple; you do
   not need a special prompt (see the trust note below on why we don't ship one).
3. **Review and keep what's yours.** The output is a *proposal*. Delete noise,
   merge duplicates, rename. This curation is the point — it's what makes the
   structure yours rather than the model's.
4. **Commit.** Now your context is user-owned, inspectable, and forkable. Git
   history will show every later move.

Optional next: adopt one [pattern](patterns/) when you hit the problem it names
(e.g. `hot-cold-context-split` once the always-loaded surface grows).

### Example phrasing (say it however you like — this is not a script)

> Read the text I'm giving you. Don't summarize it into one blob — route it.
> Dated or event-like material becomes entries in `logs/`, grouped by date.
> Ideas that recur or stand on their own as a claim each become one file in
> `fragments/` with a short title and a 2–4 sentence core, marked confidence
> low/medium/high. Drop filler and duplication, and list what you dropped so I
> can check. Give me proposed file paths and contents as a proposal I'll edit.
> Don't invent anything not in my text.

Iterate chunk by chunk. The first pass gives you a rough spine, not a finished
system — it gets sharper every time you curate.

## Second way in — the onboarding interview

If you don't have a corpus to dump, or you'd rather be drawn out than paste, run
the onboarding as a conversation. Ask your agent to interview you: what you're
working on, what recurs, what you believe, what constraints you live under. Then
have it route your answers into the same layers.

This mode has three nice properties:

- **It covers the blank-page case.** No existing writing required.
- **The transcript self-seeds.** The interview itself is your first `logs/`
  entry — the conversation is already the raw material.
- **Same trust model.** It's still a plain conversation with an agent you chose,
  producing output that stays in your repo. No script, nothing to trust.

You can also mix the two: interview first to surface the shape, then dump a
corpus against that shape so the ingestion knows what you care about.

## Trust note — why there's no magic prompt or script

This matters more than the mechanics. A repo whose entire claim is *don't hand
your context to a system you can't inspect* would contradict itself if it shipped
a clever ingestion prompt you had to trust, or a script that ran over your
private corpus. So it ships neither.

- **No script touches your corpus.** There is nothing here that reads, uploads,
  or transforms your data. The transformation is a plain-language request you
  make to an agent *you* chose.
- **The example above is example wording, not code to run.** Rephrase it, shorten
  it, ignore it. Nothing depends on exact text.
- **Keep the ingestion sovereign.** Run it on a local model or a provider you're
  willing to trust with that corpus, and keep every output inside your repo. The
  onboarding models the sovereignty it argues for. The absence of anything to
  trust *is* the design.

## Honest caveat

First pass is rough, not magic. Handing raw logs to a model gives you a usable
skeleton, immediately better than a scattered pile — but the value compounds with
curation, not in one shot. Expect to prune.
