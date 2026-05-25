import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const html = readFileSync(path.join(root, "index.html"), "utf8");
const failures = [];

const forbiddenPatterns = [
  /case study soon/i,
  /demo later/i,
  /repo later/i,
  /coming soon/i,
  /proof-first/i,
  /codex-built/i,
  /portfolio repair/i,
  /repair pass/i,
  /verifiable Codex/i,
];

for (const pattern of forbiddenPatterns) {
  if (pattern.test(html)) {
    failures.push(`Forbidden placeholder or unsafe contact pattern found: ${pattern}`);
  }
}

const linkPattern = /\b(?:src|href)=["']([^"']+)["']/g;
for (const [, rawValue] of html.matchAll(linkPattern)) {
  if (
    rawValue.startsWith("http") ||
    rawValue.startsWith("mailto:") ||
    rawValue.startsWith("tel:") ||
    rawValue.startsWith("#") ||
    rawValue.startsWith("data:")
  ) {
    continue;
  }

  const cleanValue = rawValue.split("#")[0].split("?")[0];
  const relativePath = cleanValue.startsWith("/") ? cleanValue.slice(1) : cleanValue;
  if (!relativePath) {
    continue;
  }

  const sourceCandidates = [
    path.join(root, relativePath),
    path.join(root, "public", relativePath),
  ];

  if (!sourceCandidates.some((candidate) => existsSync(candidate))) {
    failures.push(`Missing local asset referenced by ${rawValue}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Static portfolio checks passed");
