# Tips

This directory stores lightweight operational know-how and small hacks that work immediately.

`tips/` is lighter than `playbook/` and more reusable than `logs/`.
Its purpose is not to grow strong concepts or general principles, but to preserve small things that worked in a form that can be re-ingested easily.
In feel, it sits close to the concrete `do / act` layer.
The subject is not “I will do this now” but “this tends to work.”

## Role

- `logs/`:
  state differences, raw observation, event records
- `tips/`:
  lightweight hacks, small operational knowledge, locally reusable notes
- `fragments/`:
  local hypotheses and emerging definitions extracted from observation
- `playbook/`:
  operational rules that are immediate but conceptually tighter

## What Belongs in `tips/`

- small things that can be used starting today
- lightweight hacks that worked in everyday operation
- low-granularity know-how close to “this makes it easier” or “this tends to go through”
- low-granularity practical thinking that is closer to execution than to conceptualization
- local practices with weak triggers but verified practical effect
- things too conceptually heavy for `playbook/`
- reusable knowledge too valuable to leave buried in `logs/`

## What Does Not Belong Here

- raw event records by themselves
- material that contains strong theorization or conceptual closure
- things whose `trigger / indicators / default_response` are already tight enough to be treated conceptually
- ideas that are still too unclear to know whether they work

## Center of Use

In normal use, the main flow is:

`logs diff -> consult tips -> create todo`

Conceptual layers such as `fragments` and `playbook` are not usually touched every time.
They are kept for moments when the diff is large or the operational principles need to be revisited.

`tips` is close to `todo`, but they are not the same.
`tips` stores the way of doing something.
`todo` stores the actual instance to execute now.
Rather than writing the same thing in both places, the default order is to look at `tips` and then create a `todo`.

`tips / todo / playbook` are therefore usually easier to read as adjacent layers of `means / practice / theory` than as a simple promotion chain.
Most of the time, linking is more natural than promotion.

Similarly, tips with similar use cases or complementary roles may be linked laterally.
Sometimes it is better to preserve a bundle of light operational know-how than to force it into a concept layer.

## Subdirectories

- `private/`
  tips for home, body, emotion, and everyday life
- `work/`
  tips for client communication, meetings, handoff, negotiation, and workplace coordination
- `dev/`
  tips for development environments, AI collaboration, and implementation workflows

## Layer Relationships

`tips/` is normally cut out from `logs/`.

There are two common paths:

`logs -> tips`
`logs -> fragments`

The rough split is:

- “this worked in a small way and I will likely use it again tomorrow” -> `tips`
- “this should grow as a structural hypothesis” -> `fragments`

Even when a tip is related to a playbook, it is usually better to ask:

- which playbook supports this tip
- which tip appears when this playbook is implemented

and link them, rather than immediately promoting.

Actual `tips -> playbook` movement should happen only when the goal is not to preserve the trick itself, but to canonize the judgment principle behind it.

There may also be a path like:

`tips -> fragments -> playbook`

When something used as a small trick turns out to contain a deeper structural hypothesis, move it into `fragments`, conceptualize it, and then let it mature into `playbook`.

Conversely, `fragments -> tips` is also possible.
A hypothesis may first be tested in practice as a tip, then used to reinforce the fragment.

## References

- [`criteria.md`](./criteria.md)
- [`private/README.md`](./private/README.md)
- [`work/README.md`](./work/README.md)
- [`dev/README.md`](./dev/README.md)
