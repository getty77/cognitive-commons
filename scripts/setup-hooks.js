#!/usr/bin/env node

const { execFileSync } = require("child_process");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const hooksPath = ".githooks";

try {
  execFileSync("git", ["rev-parse", "--is-inside-work-tree"], {
    cwd: repoRoot,
    stdio: "ignore",
  });
} catch {
  console.error("Not inside a git repository. Skipping hook setup.");
  process.exit(1);
}

execFileSync("git", ["config", "core.hooksPath", hooksPath], {
  cwd: repoRoot,
  stdio: "inherit",
});

console.log(`Configured git hooks path to ${hooksPath}`);
