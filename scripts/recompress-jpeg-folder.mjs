/**
 * Re-encode JPEGs in place (lossy) via temp file. No resize unless --width N passed.
 * Usage: node scripts/recompress-jpeg-folder.mjs <folder> <quality> [--width N]
 */
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const args = process.argv.slice(2)
const widthArg = args.indexOf('--width')
let maxWidth = null
if (widthArg !== -1 && args[widthArg + 1]) {
  maxWidth = parseInt(args[widthArg + 1], 10)
  args.splice(widthArg, 2)
}
const dir = path.resolve(args[0] ?? '')
const quality = parseInt(args[1] ?? '84', 10)
if (!dir || Number.isNaN(quality)) {
  console.error('Usage: node scripts/recompress-jpeg-folder.mjs <folder> <quality> [--width N]')
  process.exit(1)
}

const files = (await fs.readdir(dir)).filter((f) => f.toLowerCase().endsWith('.jpg')).sort()
if (!files.length) {
  console.error('No JPEG files in', dir)
  process.exit(1)
}

const concurrency = 4
let next = 0
let done = 0

async function one(name) {
  const input = path.join(dir, name)
  const tmp = path.join(dir, `${name}.recompress-tmp`)
  let pipeline = sharp(input)
  if (maxWidth) pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true })
  await pipeline.jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:2:0' }).toFile(tmp)
  await fs.rename(tmp, input)
  done++
  if (done % 30 === 0 || done === files.length) console.log(`${done}/${files.length}`)
}

async function worker() {
  while (true) {
    const i = next++
    if (i >= files.length) break
    await one(files[i])
  }
}

const t0 = Date.now()
await Promise.all(Array.from({ length: concurrency }, () => worker()))
let sum = 0
for (const f of files) sum += (await fs.stat(path.join(dir, f))).size
console.log(`Done in ${((Date.now() - t0) / 1000).toFixed(0)}s, total ${(sum / 1e6).toFixed(2)} MB (q=${quality}${maxWidth ? `, w<=${maxWidth}` : ''})`)
