# Repo Skills

This directory stores Skill implementations bundled directly inside the repo.

The purpose is to:

- keep canonical repo rules close to the Skill implementations derived from them
- make later public extraction easier without changing the structure
- avoid depending too heavily on personal-environment paths like `~/.codex/skills/`

Even when installing into a personal environment, this directory should be treated as the canonical source first.

## Implemented Skills

- `spiral-daily-log-sorter`
  Sort rough notes or mixed inputs into appropriate save destinations
- `spiral-past-diary-reingestion`
  Safely reinterpret past diaries through the current OS vocabulary
- `spiral-media-reinterpreter`
  Normalize reading-, audio-, and video-derived input into media logs
- `spiral-layer-review`
  Evaluate promotion, demotion, relocation, and other layer-responsibility moves
- `spiral-public-candidate-evaluator`
  Evaluate public candidacy and destination tags
