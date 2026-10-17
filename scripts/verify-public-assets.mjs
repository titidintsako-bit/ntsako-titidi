import { readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const allowed = new Set([
  'favicon.svg',
  'previews/astra-live.webp',
  'previews/kairo-live.webp',
  'previews/moya-live.webp',
  'profile/ntsako.jpg',
])

async function listFiles(directory) {
  const files = []

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await listFiles(path))
    } else if (entry.isFile()) {
      files.push(relative(publicDir, path).replaceAll('\\', '/'))
    } else {
      throw new Error(`Unsupported public asset: ${path}`)
    }
  }

  return files
}

const actual = new Set(await listFiles(publicDir))
const unexpected = [...actual].filter((file) => !allowed.has(file))
const missing = [...allowed].filter((file) => !actual.has(file))

if (unexpected.length || missing.length) {
  if (unexpected.length) console.error(`Unexpected public files: ${unexpected.join(', ')}`)
  if (missing.length) console.error(`Missing public files: ${missing.join(', ')}`)
  process.exitCode = 1
} else {
  console.log(`Verified ${actual.size} public assets.`)
}
