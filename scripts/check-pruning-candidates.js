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

function isContentFile(file) {
  const base = path.basename(file);
  if (base.startsWith(".")) return false;
  if (base === "README.md" || base === "_template.md" || base === "log.md" || base === "criteria.md") {
    return false;
  }
  return true;
}

let changedFiles = [];

try {
  changedFiles = git(["diff-tree", "--no-commit-id", "--name-only", "-r", "-M", "HEAD"])
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
} catch (error) {
  console.log("Pruning candidate check skipped.");
  process.exit(0);
}

const layerManagementTouched = changedFiles.some((file) =>
  file.startsWith("meta/layer_management/"),
);
const publicOutputTouched = changedFiles.some(
  (file) =>
    file.startsWith("interfaces/public_translation/") ||
    file.startsWith("interfaces/cognitive_tools/"),
);
const theoryTouched = changedFiles.some((file) => file.startsWith("theory/"));
const contextTouched = changedFiles.some((file) => file.startsWith("context/"));

const fragmentFiles = changedFiles.filter(
  (file) => file.startsWith("fragments/") && isContentFile(file),
);
const playbookFiles = changedFiles.filter(
  (file) => file.startsWith("playbook/") && isContentFile(file),
);
const experimentFiles = changedFiles.filter(
  (file) => file.startsWith("experiments/") && isContentFile(file),
);
const publicCandidateFiles = changedFiles.filter(
  (file) => file.startsWith("public_candidates/") && isContentFile(file),
);
const currentStateTouched = changedFiles.includes("logs/000_current_state.md");

const notes = [];

if (fragmentFiles.length > 0 && !layerManagementTouched) {
  notes.push("fragment pruning review suggested:");
  for (const file of fragmentFiles) notes.push(`- ${file}`);
  notes.push("  ask: keep as fragment / promote / prune?");
}

if (playbookFiles.length > 0 && !theoryTouched && !contextTouched && !layerManagementTouched) {
  notes.push("playbook pruning review suggested:");
  for (const file of playbookFiles) notes.push(`- ${file}`);
  notes.push("  ask: keep as playbook / demote / relocate?");
}

if (experimentFiles.length > 0 && !layerManagementTouched && !publicOutputTouched) {
  notes.push("experiment review suggested:");
  for (const file of experimentFiles) notes.push(`- ${file}`);
  notes.push("  ask: keep experimental / promote / return?");
}

if (publicCandidateFiles.length > 0 && !publicOutputTouched && !layerManagementTouched) {
  notes.push("public candidate review suggested:");
  for (const file of publicCandidateFiles) notes.push(`- ${file}`);
  notes.push("  ask: keep candidate / translate / toolify / withdraw?");
}

if (currentStateTouched && !layerManagementTouched) {
  notes.push("current_state pruning review suggested:");
  notes.push("- logs/000_current_state.md");
  notes.push("  ask: sync only / compress / split supporting detail into lower layers?");
}

if (notes.length === 0) {
  console.log("No pruning review candidates detected.");
  process.exit(0);
}

console.log("Pruning review candidates detected:");
for (const line of notes) {
  console.log(line);
}
