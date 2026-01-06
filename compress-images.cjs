const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './dist/Vibe September 2001';
const outputDir = './public/vibe-sept-2001';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all PNG files and sort them numerically
const files = fs.readdirSync(inputDir)
  .filter(f => f.endsWith('.png'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/g).pop());
    const numB = parseInt(b.match(/\d+/g).pop());
    return numA - numB;
  });

console.log(`Found ${files.length} images to compress...`);

async function compressImages() {
  let completed = 0;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace('.png', '.jpg');
    const outputPath = path.join(outputDir, outputFile);
    
    try {
      await sharp(inputPath)
        .resize(1600, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 80 })
        .toFile(outputPath);
      
      completed++;
      if (completed % 10 === 0 || completed === files.length) {
        console.log(`Compressed ${completed}/${files.length} images...`);
      }
    } catch (err) {
      console.error(`Error compressing ${file}:`, err.message);
    }
  }
  
  console.log('\nDone! Images saved to:', outputDir);
}

compressImages();

