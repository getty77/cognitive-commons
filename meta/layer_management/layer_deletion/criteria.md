# Layer Deletion Criteria

## Core Criteria

- The layer has very few actual files.
- Its responsibility is no longer distinct from other layers.
- The operational cost of explaining the layer is larger than the value it
  provides.

## Notes

When deleting a layer, move existing files to other layers and update
references in the same cycle.

When deleting a thin layer such as `archive/`, first check whether Git history
alone is now sufficient.
