/**
 * Convert Rap Pages March 1999 PNGs to JPEG (maxWidth 2280, mozjpeg). ~125 MB / 164 pages:
 * if total is still over 125 MB after this pass, run
 *   node scripts/recompress-jpeg-folder.mjs "public/Rap Pages March 1999" 81
 * Writes *.jpg.tmp then replaces; removes PNG after success.
 */
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const MAX_WIDTH = 2280
const JPEG_QUALITY = 83

const dir = path.resolve('public/Rap Pages March 1999')
const files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.png')).sort()
if (!files.length) {
  console.error('No PNG files in', dir)
  process.exit(1)
}

const concurrency = 3
let next = 0
let done = 0

async function convertOne(pngName) {
  const input = path.join(dir, pngName)
  const base = pngName.slice(0, -4)
  const tmp = path.join(dir, `${base}.jpg.tmp`)
  const outPath = path.join(dir, `${base}.jpg`)
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toFile(tmp)
  await fs.rename(tmp, outPath)
  await fs.unlink(input)
  done++
  if (done % 20 === 0 || done === files.length) console.log(`${done}/${files.length}`)
}

async function worker() {
  while (true) {
    const idx = next++
    if (idx >= files.length) break
    await convertOne(files[idx])
  }
}

const t0 = Date.now()
await Promise.all(Array.from({ length: concurrency }, () => worker()))
const entries = await fs.readdir(dir)
const jpgs = entries.filter((f) => f.toLowerCase().endsWith('.jpg'))
let sum = 0
for (const f of jpgs) {
  sum += (await fs.stat(path.join(dir, f))).size
}
console.log(`Done ${files.length} files in ${((Date.now() - t0) / 1000).toFixed(0)}s`)
console.log(`Total JPEG: ${(sum / 1e6).toFixed(2)} MB (${jpgs.length} files), maxWidth=${MAX_WIDTH}, q=${JPEG_QUALITY}`)
