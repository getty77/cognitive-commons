#!/usr/bin/env node

const { execFileSync } = require("child_process");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

const checks = [
  "scripts/check-agent-sync-candidates.js",
  "scripts/check-expansion-candidates.js",
  "scripts/check-essay-candidates.js",
  "scripts/check-pruning-candidates.js",
  "scripts/check-current-state-sync.js",
];

function runNodeScript(scriptPath) {
  try {
    return execFileSync("node", [scriptPath], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch (error) {
    const stdout = error.stdout ? String(error.stdout).trim() : "";
    const stderr = error.stderr ? String(error.stderr).trim() : "";
    return [stdout, stderr].filter(Boolean).join("\n").trim();
  }
}

function isAdvisory(output) {
  if (!output) return false;
  return !/^No .* detected\.$/.test(output) && !/skipped\.$/.test(output);
}

const outputs = checks
  .map((scriptPath) => runNodeScript(scriptPath))
  .filter(Boolean);

for (const output of outputs) {
  console.log(output);
}

const advisoryDetected = outputs.some(isAdvisory);

if (!advisoryDetected) {
  console.log("No advisory follow-up reminder needed.");
  process.exit(0);
}

console.log("Advisory follow-up reminder:");
console.log("- review the advisory in the same commit cycle when practical");
console.log("- decide manually: reflect now / pass after inspection / defer to a later review");
console.log("- this script does not inspect or close advisories automatically");
