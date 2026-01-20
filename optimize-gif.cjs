const sharp = require('sharp');
const fs = require('fs');

const inputPath = 'public/cd—final intro.gif';
const outputPath = 'public/cd—final intro-optimized.gif';

async function optimizeGif() {
  console.log('Starting GIF optimization...');
  console.log('Input file:', inputPath);
  
  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found!');
    process.exit(1);
  }

  const inputSize = fs.statSync(inputPath).size;
  console.log('Input size:', (inputSize / 1024 / 1024).toFixed(2), 'MB');

  try {
    console.log('Processing GIF...');
    
    // Resize the GIF to 350px width and reduce colors
    // limitInputPixels: false allows large animated GIFs
    await sharp(inputPath, { animated: true, limitInputPixels: false })
      .resize(350)
      .gif({ colours: 64 })
      .toFile(outputPath);
    
    const outputSize = fs.statSync(outputPath).size;
    console.log('Output size:', (outputSize / 1024 / 1024).toFixed(2), 'MB');
    console.log('Reduction:', ((1 - outputSize / inputSize) * 100).toFixed(1), '%');
    
    // Replace original with optimized
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    console.log('Done! Replaced original with optimized version.');
  } catch (error) {
    console.error('Error optimizing GIF:', error);
    process.exit(1);
  }
}

optimizeGif().catch(console.error);
