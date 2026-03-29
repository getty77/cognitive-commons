#!/usr/bin/env node

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

const targetRules = [
  {
    prefix: "fragments/",
    headings: ["related_fragments", "related_playbook", "related_theory"],
  },
  {
    prefix: "playbook/",
    headings: ["linked_playbook", "linked_tips", "linked_fragments", "linked_theory"],
  },
  {
    prefix: "tips/",
    headings: ["related_tips", "related_playbook", "related_context"],
  },
  {
    prefix: "todo/",
    headings: ["related_todos", "related_tip", "related_playbook", "related_context"],
  },
  {
    prefix: "narratives/",
    headings: ["linked_narratives", "linked_core", "linked_theory", "linked_playbook"],
  },
];

function getStagedFiles() {
  try {
    const output = execFileSync(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
      {
        cwd: repoRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    ).trim();
    return output ? output.split("\n").filter(Boolean) : [];
  } catch {
    return [];
  }
}

function shouldInspect(relPath) {
  if (!relPath.endsWith(".md")) return false;
  if (relPath.endsWith("README.md")) return false;
  if (relPath.endsWith("_template.md")) return false;
  return targetRules.some(({ prefix }) => relPath.startsWith(prefix));
}

function hasNonEmptyLink(content, heading) {
  const sectionPattern = new RegExp(
    `(^${heading}:\\s*[\\s\\S]*?)(?=^\\w[\\w_]*:|^##\\s|^#\\s|$(?![\\s\\S]))`,
    "m",
  );
  const sectionMatch = content.match(sectionPattern);
  if (sectionMatch) {
    const values = [...sectionMatch[1].matchAll(/-\s+"([^"]*)"/g)].map((m) => m[1].trim());
    if (values.some(Boolean)) return true;
    const scalar = sectionMatch[1].match(/:\s*([^\n]+)/);
    if (scalar && scalar[1].trim() && scalar[1].trim() !== '""') return true;
  }

  const headingPattern = new RegExp(
    `^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|^#\\s|$(?![\\s\\S]))`,
    "m",
  );
  const headingMatch = content.match(headingPattern);
  if (headingMatch) {
    const values = [...headingMatch[1].matchAll(/-\s+"([^"]*)"/g)].map((m) => m[1].trim());
    if (values.some(Boolean)) return true;
  }

  return false;
}

const stagedFiles = getStagedFiles().filter(shouldInspect);
const candidates = [];

for (const relPath of stagedFiles) {
  const absPath = path.join(repoRoot, relPath);
  if (!fs.existsSync(absPath)) continue;
  const content = fs.readFileSync(absPath, "utf8");
  const rule = targetRules.find(({ prefix }) => relPath.startsWith(prefix));
  if (!rule) continue;

  const linked = rule.headings.some((heading) => hasNonEmptyLink(content, heading));
  if (!linked) {
    candidates.push(relPath);
  }
}

if (candidates.length === 0) {
  console.log("No linking review candidates detected.");
  process.exit(0);
}

console.log("Linking review candidates detected:");
for (const relPath of candidates) {
  console.log(`- ${relPath}`);
}
console.log("  note: add at least one meaningful same-layer or cross-layer link when natural.");
process.exit(0);
