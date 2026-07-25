import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = './src/assets';

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    if (file.endsWith('.png') && file !== 'hero.png') {
      const inputPath = path.join(assetsDir, file);
      const outputFilename = file.replace('.png', '.webp');
      const outputPath = path.join(assetsDir, outputFilename);
      
      console.log(`Optimizing ${file}...`);
      
      try {
        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath);
        console.log(`Saved as ${outputFilename}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages().catch(console.error);
