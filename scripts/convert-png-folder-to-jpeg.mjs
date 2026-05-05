/**
 * Convert PNGs to JPEG (mozjpeg), then remove PNGs. Writes *.jpg.tmp then renames.
 * Usage: node scripts/convert-png-folder-to-jpeg.mjs <folder> [quality]
 */
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const dir = path.resolve(process.argv[2] ?? '')
const quality = Math.min(100, Math.max(1, parseInt(process.argv[3] ?? '90', 10) || 90))

if (!dir) {
  console.error('Usage: node scripts/convert-png-folder-to-jpeg.mjs <folder> [quality]')
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

async function convertOne(pngName) {
  const input = path.join(dir, pngName)
  const base = pngName.slice(0, -4)
  const outName = `${base}.jpg`
  const tmp = path.join(dir, `${outName}.tmp`)
  const finalPath = path.join(dir, outName)
  const before = (await fs.stat(input)).size
  await sharp(input)
    .jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(tmp)
  const after = (await fs.stat(tmp)).size
  await fs.rename(tmp, finalPath)
  await fs.unlink(input)
  saved += before - after
  done++
  if (done % 20 === 0 || done === files.length) {
    console.log(`${done}/${files.length} … ${pngName} ${(before / 1e6).toFixed(2)} → ${(after / 1e6).toFixed(2)} MB`)
  }
}

let next = 0
async function worker() {
  while (true) {
    const idx = next++
    if (idx >= files.length) break
    await convertOne(files[idx])
  }
}

const t0 = Date.now()
await Promise.all(Array.from({ length: concurrency }, () => worker()))
console.log(`Done in ${((Date.now() - t0) / 1000).toFixed(1)}s. Net size change vs PNG: ${(saved / 1e6).toFixed(2)} MB smaller (quality ${quality}, 4:4:4 chroma)`)
