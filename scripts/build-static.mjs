import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(root, "..");
const distDir = path.join(projectRoot, "dist");
const publicDir = path.join(projectRoot, "public");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

await copyFile(path.join(projectRoot, "index.html"), path.join(distDir, "index.html"));

for (const staticFile of ["robots.txt", "sitemap.xml"]) {
  const sourcePath = path.join(projectRoot, staticFile);
  if (existsSync(sourcePath)) {
    await copyFile(sourcePath, path.join(distDir, staticFile));
  }
}

if (existsSync(publicDir)) {
  await cp(publicDir, distDir, { recursive: true });
}

console.log(`Built static portfolio at ${distDir}`);
