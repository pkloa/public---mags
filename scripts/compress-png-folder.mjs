/**
 * Re-encode PNGs with maximum zlib effort (lossless). Writes .tmp then replaces.
 * Usage: node scripts/compress-png-folder.mjs <folder>
 */
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const dir = path.resolve(process.argv[2] ?? '')
if (!dir) {
  console.error('Usage: node scripts/compress-png-folder.mjs <folder>')
  process.exit(1)
}

const entries = await fs.readdir(dir)
const files = entries.filter((f) => f.toLowerCase().endsWith('.png'))
if (!files.length) {
  console.error('No PNG files in', dir)
  process.exit(1)
}

const concurrency = 3
let done = 0
let saved = 0

async function compressOne(file) {
  const input = path.join(dir, file)
  const tmp = path.join(dir, `${file}.compress-tmp`)
  const st = await fs.stat(input)
  const before = st.size
  await sharp(input).png({ compressionLevel: 9, effort: 10 }).toFile(tmp)
  const after = (await fs.stat(tmp)).size
  await fs.rename(tmp, input)
  saved += before - after
  done++
  if (done % 10 === 0 || done === files.length) {
    console.log(`${done}/${files.length} … last: ${file} ${(before / 1e6).toFixed(2)} → ${(after / 1e6).toFixed(2)} MB`)
  }
}

let next = 0
async function worker() {
  while (true) {
    const idx = next++
    if (idx >= files.length) break
    await compressOne(files[idx])
  }
}

const t0 = Date.now()
await Promise.all(Array.from({ length: concurrency }, () => worker()))
console.log(`Done in ${((Date.now() - t0) / 1000).toFixed(1)}s. Total size reduction: ${(saved / 1e6).toFixed(2)} MB`)
