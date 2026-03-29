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
  console.log("Expansion candidate check skipped.");
  process.exit(0);
}

const touchedSkillOutputs = changedFiles.some(
  (file) => file.startsWith("skills/") || file.startsWith("meta/skills/"),
);
const touchedPublicOutputs = changedFiles.some((file) =>
  file.startsWith("public_candidates/"),
);

const skillSourcePatterns = [
  "logs/daily/README.md",
  "meta/update/reingestion.md",
  "logs/reading/README.md",
  "logs/listening/README.md",
  "logs/watching/README.md",
  "meta/layer_management/",
  "public_candidates/criteria.md",
  "public_candidates/README.md",
];

const publicSourcePatterns = [
  "meta/layer_management/",
  "meta/directory_management/",
  "skills/",
  "interfaces/",
];

const skillCandidates = changedFiles.filter((file) =>
  skillSourcePatterns.some((pattern) => file.startsWith(pattern)),
);

const publicCandidates = changedFiles.filter((file) =>
  publicSourcePatterns.some((pattern) => file.startsWith(pattern)),
);

const notes = [];

if (!touchedSkillOutputs && skillCandidates.length > 0) {
  notes.push("skill expansion review suggested:");
  for (const file of skillCandidates) {
    notes.push(`- ${file}`);
  }
  notes.push("  target: meta/skill_migration_inventory.md / meta/skills/README.md");
}

if (!touchedPublicOutputs && publicCandidates.length > 0) {
  notes.push("public candidate review suggested:");
  for (const file of publicCandidates) {
    notes.push(`- ${file}`);
  }
  notes.push("  target: public_candidates/");
}

if (notes.length === 0) {
  console.log("No expansion review candidates detected.");
  process.exit(0);
}

console.log("Expansion review candidates detected:");
for (const line of notes) {
  console.log(line);
}
