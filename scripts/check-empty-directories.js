#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const ignoreDirs = new Set([".git", "node_modules"]);
const emptyDirs = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const rel = path.relative(root, dir) || ".";

  const childDirs = entries
    .filter((entry) => entry.isDirectory() && !ignoreDirs.has(entry.name))
    .map((entry) => path.join(dir, entry.name));

  for (const child of childDirs) {
    walk(child);
  }

  const remaining = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !ignoreDirs.has(entry.name));

  if (rel !== "." && remaining.length === 0) {
    emptyDirs.push(rel);
  }
}

walk(root);

if (emptyDirs.length > 0) {
  console.error("Empty directories found:");
  for (const dir of emptyDirs.sort()) {
    console.error(`- ${dir}`);
  }
  process.exit(1);
}

console.log("No empty directories found.");
