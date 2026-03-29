# Review Management

This directory defines the role of lightweight reviews that run around commits.

The reviews handled here do not perform structural changes automatically.
They are meant as an advisory layer that keeps day-to-day operation light while still surfacing differences worth looking at in the next review meeting.

## Core Policy

- Keep everyday commit-time reviews lightweight
- Only inspect the `HEAD` diff
- Do not scan full history or deeply interpret document bodies
- Do not perform automatic promotion, demotion, or deletion
- If an advisory appears, it is recommended to look at it at least once in that commit cycle
- Heavy decisions can be deferred to full reviews or layer-management meetings

## Sub-checks

- `check:agent-sync-candidates`
  - review candidates for `.claude` / `.codex` projections
- `check:expansion-candidates`
  - review candidates for skill-ization or `public_candidates/` additions
- `check:pruning-candidates`
  - lightweight pruning candidates in `fragments / playbook / experiments / public_candidates / current_state`
- `check:essay-candidates`
  - candidates in `theory/operational/` that may be ready to become essays
- `check:current-state-sync`
  - detects date drift between `logs/000_current_state.md` and the latest daily log

## Position

- Treat expansion candidates and pruning candidates on the same review surface
- At commit time, do not stop at extraction; make it clear what should be looked at in the same cycle
- Leave heavy judgments to scheduled reviews or layer-management meetings

## Commit-Time Handling

- `npm run check:review-candidates` runs the bundled checkers and prints a follow-up reminder
- `check:linking-candidates` is treated as an adjacent advisory run separately in pre-commit, not bundled into review management
- Pre-commit runs `check:linking-candidates` alongside `check:protocol` to ensure at least minimal link structure exists
- Reminders do not perform automatic analysis; they only signal that something deserves review
- The actual review of advisory items should happen through dialogue or human judgment
- If no change is needed, it is fine to close it with a `pass` judgment
- If a change is needed, fix it directly and resolve it in the next commit
