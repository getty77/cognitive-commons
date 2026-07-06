#!/usr/bin/env node

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

function git(args) {
  return execFileSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
}

function read(file) {
  return fs.readFileSync(path.join(repoRoot, file), "utf8");
}

function extractListCount(text, key) {
  const match = text.match(new RegExp(`${key}:\\s*\\n((?:\\s*- .*\\n)*)`, "m"));
  if (!match) return 0;
  return match[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- ")).length;
}

let changedFiles = [];

try {
  changedFiles = git(["diff-tree", "--no-commit-id", "--name-only", "-r", "-M", "HEAD"])
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
} catch (error) {
  console.log("Essay candidate check skipped.");
  process.exit(0);
}

const operationalCandidates = changedFiles.filter(
  (file) => file.startsWith("theory/operational/") && file.endsWith(".md") && !file.endsWith("README.md"),
);

const notes = [];

for (const file of operationalCandidates) {
  const text = read(file);
  const isDraft = /status:\s*draft/.test(text);
  const sourceLayerCount = extractListCount(text, "source_layers");
  const linkedPlaybookCount = extractListCount(text, "linked_playbook");

  if (isDraft && sourceLayerCount >= 3 && linkedPlaybookCount >= 2) {
    notes.push(`- ${file}`);
  }
}

if (notes.length === 0) {
  console.log("No essay review candidates detected.");
  process.exit(0);
}

console.log("Essay review candidates detected:");
for (const line of notes) {
  console.log(line);
}
console.log("  ask: keep operational / start new essay?");
