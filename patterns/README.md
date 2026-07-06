# Operational Patterns

Field-tested patterns for running a user-owned context kernel over months of
daily use, distilled from a private research OS (761 commits over six weeks
were mined for the first batch). Each pattern is one file: the problem it
solves, the mechanism, and a minimal recipe you can adapt.

These are optional. The kernel stays intentionally small; patterns supply
depth without bloating the core. Adopt one when you actually hit the problem
it names — not before.

## Batch 1 (2026-07)

| Pattern | Problem it solves |
|---|---|
| [hot-cold-context-split](hot-cold-context-split.md) | Always-loaded context grows until it crowds out thinking |
| [canonical-projection-index](canonical-projection-index.md) | The same rule drifts apart across multiple AI harnesses |
| [sparse-trigger-atlas](sparse-trigger-atlas.md) | Well-written doctrine never fires because it is never loaded |
| [bounded-autonomy](bounded-autonomy.md) | Agents either ask permission for everything or overstep silently |
| [drift-to-guard](drift-to-guard.md) | Every rule violation gets answered with another rigid guard |

## Batch 2 (2026-07) — relational safety

These concern the risks that appear when an AI system becomes a persistent,
high-resolution companion. Disclosed on a responsible-disclosure basis: they
name the failure classes and give detection signatures a user or designer can
check, but deliberately withhold the assembly parameters that would make them
a construction manual. Defenses are published alongside the risks, never after.

| Pattern | Problem it solves |
|---|---|
| [provider-owned-context-risk](provider-owned-context-risk.md) | "More helpful" quietly becomes "harder to leave" |
| [agency-return-protocol](agency-return-protocol.md) | Relief and rescue harden into dependence on the rescuer |
| [relational-capture-audit](relational-capture-audit.md) | Capture that carries no sexual or coercive markers slips every detector |
