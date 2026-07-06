# Drift-to-Guard

## Problem

A soft behavioral rule (a doctrine) keeps drifting under load — the agent
"knows" the rule but stops following it in long sessions. The reflexive fix
is to harden it: a hook, a blocker, a mandatory checklist. Do that for every
drift and the system calcifies into administration — every output becomes a
compliance exercise, and the agent's judgment atrophies. Do it for none and
drift runs free. The failure is treating dosage as binary.

## Mechanism

Treat repeated drift as a *symptom to triage*, not an automatic case for
enforcement:

1. **Why does it drift?** Wrong altitude (rule fires at the wrong moment),
   dead weight (rule no longer earns its cost), context starvation (rule
   wasn't loaded — see sparse-trigger atlas), or genuine incentive conflict.
   Each cause has a different remedy; only the last one is a candidate for
   structural enforcement.
2. **Default remedy is audit**, not guard: measure the drift, surface it in
   review, reword the trigger. Most drifts die here.
3. **Structural guards are rare, gated, and expiring.** If you do install a
   hook or hard check, give it an owner, a reason recorded next to it, and a
   review date at which it must re-justify its existence or be removed.

The balance to hold has two failure poles: *chilling* (so many guards the
agent stops exercising judgment) and *administration* (every action wrapped
in checklist bureaucracy). The dosage rule — audit by default, enforcement
as a rare, expiring exception — is what keeps you off both poles.

## Minimal recipe

1. Keep a drift log: rule, occurrence, suspected cause.
2. On the third occurrence, run the triage above — never install a guard on
   the first annoyance.
3. For each installed guard, record: reason, owner, expiry/review date.
4. In periodic review, delete guards that no longer catch anything; a guard
   that never fires is either victorious (rule internalized — remove it) or
   dead weight (remove it).
