#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const currentStatePath = path.join(repoRoot, "logs/000_current_state.md");
const dailyDir = path.join(repoRoot, "logs/daily");

function getLastSynced() {
  if (!fs.existsSync(currentStatePath)) return null;
  const content = fs.readFileSync(currentStatePath, "utf8");
  const match = content.match(/^last_synced:\s*(\S+)/m);
  return match ? match[1] : null;
}

function getLatestDailyDate() {
  if (!fs.existsSync(dailyDir)) return null;
  const files = fs.readdirSync(dailyDir).filter((f) => /^\d{4}-\d{2}-\d{2}/.test(f) && f.endsWith(".md"));
  if (files.length === 0) return null;
  const dates = files.map((f) => f.match(/^(\d{4}-\d{2}-\d{2})/)[1]);
  dates.sort();
  return dates[dates.length - 1];
}

const lastSynced = getLastSynced();
const latestDaily = getLatestDailyDate();

if (!lastSynced || !latestDaily) {
  console.log("Current state sync check skipped.");
  process.exit(0);
}

if (lastSynced >= latestDaily) {
  console.log("No current state sync gap detected.");
  process.exit(0);
}

console.log("Current state sync gap detected:");
console.log(`- last_synced: ${lastSynced}`);
console.log(`- latest daily: ${latestDaily}`);
console.log("  note: consider updating logs/000_current_state.md to reflect recent daily logs.");
