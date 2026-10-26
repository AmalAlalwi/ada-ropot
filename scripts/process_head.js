const sharp = require('sharp');
const path = require('path');

async function createFeathered() {
  const input = path.join(__dirname, '../public/images/ada_cyber_head.jpg');
  const output = path.join(__dirname, '../public/images/ada_cyber_head_feathered.png');
  
  const meta = await sharp(input).metadata();
  const width = meta.width;
  const height = meta.height;

  // Create an SVG radial gradient mask
  const maskSvg = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radMask" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="1" />
          <stop offset="65%" stop-color="white" stop-opacity="1" />
          <stop offset="85%" stop-color="white" stop-opacity="0.6" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#radMask)" />
    </svg>`
  );

  const maskPng = await sharp(maskSvg).png().toBuffer();

  await sharp(input)
    .ensureAlpha()
    .composite([{ input: maskPng, blend: 'dest-in' }])
    .png()
    .toFile(output);

  console.log('Successfully created', output);
}

createFeathered().catch(err => {
  console.error(err);
  process.exit(1);
});
