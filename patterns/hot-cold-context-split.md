# Hot/Cold Context Split

## Problem

Anything useful tends to get promoted into the always-loaded surface: rules
files, skill catalogs, indexes, standing instructions. Each addition is
individually justified; collectively they bloat the context every session
pays for, and the kernel's "intentionally small" property quietly dies. In
one measured case a skill catalog had grown to ~400 always-loaded lines that
duplicated information the runtime already auto-loaded.

## Mechanism

Split every always-loaded artifact into two tiers:

- **Hot (front)**: a thin index that is always loaded. One line per item —
  name, hook, where the body lives. Its only job is to make the cold tier
  discoverable at the moment of need.
- **Cold (body)**: the full content, loaded on demand when a hot line fires.

The discipline is directional: content flows *out* of hot into cold by
default. Something earns a hot line only if the agent must know it exists
before knowing to look for it.

## Minimal recipe

1. Measure your always-loaded surface (lines or tokens per session).
2. For each artifact, ask: does the agent need the *content* up front, or
   only a *pointer*? Pointers stay hot; content moves cold.
3. Keep the hot line format uniform: `- [name](cold-path) — one-line hook`.
4. Re-measure. The measured example went 403 → 25 lines with no observed
   loss of recall, because the runtime's own catalog already carried the
   redundant weight.
5. Automate regeneration of the hot index from the cold bodies so the split
   survives future growth instead of eroding.
