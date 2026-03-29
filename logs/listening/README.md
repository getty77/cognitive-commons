# Listening Logs

This directory stores observations derived from podcasts, audio streams, recorded conversations, lectures, and other listening-based inputs.

`logs/listening/` is not a replacement for `daily`, but a supporting input layer.
The goal is not to summarize the audio itself, but to record what became input, what caught attention, and how it affected the OS.

## Role

- Keep listening-derived inputs as independent logs
- Make it possible to revisit which styles, topics, and speakers trigger strong reactions
- Make it easier to extract promotion candidates for `fragments`, `playbook`, and `theory`

## Relationship to `daily`

- The canonical record of listening input belongs in `logs/listening/`
- Only the differences that affected that day's `current_state` or judgments should be briefly reflected in `logs/daily/`
- Do not dump the full listening content into `daily`

## What to Record

- what was heard
- what acted as input
- what caught or resisted
- what connected to existing theory or playbooks
- whether there are update or promotion candidates

## Naming Rules

- Filenames should generally use `YYYY-MM-DD_source-title.md`
- When possible, use the Japanese title actually referenced rather than the original-language title
- If a URL is attached, use the title confirmed at the linked source for both the filename and `material`
- Even when a title is long, do not shorten it so aggressively that the meaning changes

## Examples

- `2026-03-27_podcast-title.md`
- `2026-03-27_lecture-title.md`
- `2026-03-27_interview-title.md`
