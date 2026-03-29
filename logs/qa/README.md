# Q&A Logs

This directory stores question-and-answer style logs originating from Claude, Codex, or ChatGPT.

`logs/qa/` is also an input-log layer, like `logs/daily/`, but it stores dialogue input used for hypothesis generation, testing, and branching rather than daily state transitions themselves.

## Role

- `logs/daily/`:
  the day's base log
- `logs/qa/`:
  short question-and-answer exchanges, brief investigations, hypothesis exploration, and counterexample-oriented dialogue
- `fragments/`:
  local hypotheses extracted from `logs/qa/` or `logs/daily/`
- `playbook/`:
  rapid-response rules whose operational value has been confirmed

## Basic Policy

- Keep Q&A separate from `daily`
- Prefer one file per session
- Preserve compressed logs with re-ingestion value, not raw full transcripts
- If hypothesis candidates appear, cut them into `fragments/` when appropriate
- Split directories based not on who saved the file, but on which conversation generated the content

## Directories

- `codex/`:
  Q&A logs generated in direct conversation with Codex
- `claude/`:
  Q&A logs generated in direct conversation with Claude
- `chatgpt/`:
  Q&A logs generated in ChatGPT threads

### Sorting Rules

- Even if Codex writes the file, store it in `chatgpt/` if the source conversation was ChatGPT
- Even if Codex or Claude writes the file, store it in `claude/` if the source conversation was Claude
- Put only Codex-native short reviews, recognition adjustments, or hypothesis organization into `codex/`
- Put only Claude-native short reviews, recognition adjustments, or hypothesis organization into `claude/`
- Decide the destination by the dialogue system that generated the content, not by the agent that executed the save

## Naming Examples

- `2026-03-26_session-01.md`
- `2026-03-26_hypothesis-screening.md`

Put the date first, then add a session number or a short usage label if needed.
