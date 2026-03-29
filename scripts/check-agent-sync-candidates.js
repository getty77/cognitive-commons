#!/usr/bin/env node

const { execFileSync } = require("child_process");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

function git(args) {
  return execFileSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
}

function isTrackedContentFile(file) {
  const base = path.basename(file);
  return base && !base.startsWith(".");
}

let changedFiles = [];

try {
  changedFiles = git(["diff-tree", "--no-commit-id", "--name-only", "-r", "-M", "HEAD"])
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter(isTrackedContentFile);
} catch (error) {
  console.log("Agent sync candidate check skipped.");
  process.exit(0);
}

const editedPortableSource = changedFiles.includes("meta/agent_sync/portable_ops.md");
const editedSpiralSource = changedFiles.includes("meta/agent_sync/spiral_recursive_os.md");
const editedSkillSource = changedFiles.includes("meta/skills/README.md");

const portablePatterns = [
  "meta/layer_management/",
  "meta/directory_management/",
  "meta/update/protocol.md",
  "scripts/check-empty-directories.js",
];

const spiralPatterns = [
  "interfaces/cognitive_tools/",
  "scripts/generate-handoff-prompts.js",
  "scripts/sync-agent-projections.js",
];

const skillPatterns = [
  "meta/skill_migration_inventory.md",
  "meta/skills/",
  "skills/",
];

const portableCandidates = changedFiles.filter((file) =>
  portablePatterns.some((pattern) => file.startsWith(pattern)),
);

const spiralCandidates = changedFiles.filter((file) =>
  spiralPatterns.some((pattern) => file.startsWith(pattern)),
);

const skillCandidates = changedFiles.filter((file) =>
  skillPatterns.some((pattern) => file.startsWith(pattern)),
);

const notes = [];

if (!editedPortableSource && portableCandidates.length > 0) {
  notes.push("portable_ops review suggested:");
  for (const file of portableCandidates) {
    notes.push(`- ${file}`);
  }
  notes.push("  target: meta/agent_sync/portable_ops.md");
}

if (!editedSpiralSource && spiralCandidates.length > 0) {
  notes.push("spiral-recursive-os projection review suggested:");
  for (const file of spiralCandidates) {
    notes.push(`- ${file}`);
  }
  notes.push("  target: meta/agent_sync/spiral_recursive_os.md");
}

if (!editedSkillSource && skillCandidates.length > 0) {
  notes.push("skill inventory review suggested:");
  for (const file of skillCandidates) {
    notes.push(`- ${file}`);
  }
  notes.push("  target: meta/skills/README.md");
}

if (notes.length === 0) {
  console.log("No agent sync review candidates detected.");
  process.exit(0);
}

console.log("Agent sync review candidates detected:");
for (const line of notes) {
  console.log(line);
}
