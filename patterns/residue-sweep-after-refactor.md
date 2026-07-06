# Residue Sweep After Refactor

## Problem

You move, rename, or delete something — a file, a layer, a whole subtree. The
change itself is clean. But structure is cross-referential: other files point at
what you moved, indexes list what you deleted, scripts assume a path that no
longer exists. None of it errors immediately. It just rots quietly into dead
links and stale references until the repo reads as half-finished — or, worse,
until a carve of it leaks the residue somewhere public.

## Mechanism

Treat a structural change as *not done* until its blast radius is swept. After
any move/rename/delete, before you call it finished:

- **Inbound references** — grep for the old name/path across the whole tree.
  Every hit is either re-pointed to the new home or removed. Re-point *before*
  you cut, not after.
- **Indexes and catalogs** — anything that lists items by hand (a README map, a
  skill catalog, a table of contents) is now out of sync with the tree. Reconcile
  the map to the territory.
- **Orphans and empties** — files nothing points to anymore, directories left
  empty by the move. Decide keep-or-cut deliberately; don't leave hollow scaffolds.
- **Scripts and config** — any automation that hard-codes the old path or name.
  Fix the wiring or the check silently stops working.

The discipline: the *move* is the easy 20%; the *sweep* is the 80% that keeps
the structure honest. A dead link is a small lie the repo tells about itself, and
they compound.

## Minimal recipe

1. Right after a structural change, grep the whole tree for the old name/path.
   Resolve every hit (re-point or remove).
2. Update every hand-maintained index that referenced the moved item.
3. Scan for orphaned files and empty directories; keep or cut each on purpose.
4. Run your scripts/hooks once — broken wiring surfaces as an error or a
   suddenly-silent check.
5. Only then is the refactor done. If the material is ever carved into a public
   copy, this same sweep is what keeps private residue from riding along.
