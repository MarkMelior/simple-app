const fs = require('fs');
const glob = require('glob');
const path = require('path');
const zlib = require('zlib');

const [,, srcDirArg, destDirArg] = process.argv;
const SRC_DIR = srcDirArg || path.resolve(__dirname, 'assets');
const DEST_DIR = destDirArg || path.resolve(__dirname, 'converted');

if (!fs.existsSync(SRC_DIR)) {
  console.error(`❌ Source directory not found: ${SRC_DIR}`);
  process.exit(1);
}
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

console.log(`🔍 Scanning ${SRC_DIR} for *.tgs`);
glob(`${SRC_DIR}/**/*.tgs`, async (err, files) => {
  if (err) throw err;
  if (!files.length) {
    console.log('🟡 No .tgs files found.');

    return;
  }

  for (const tgsPath of files) {
    const baseName = path.basename(tgsPath, '.tgs');
    const jsonPath = path.join(DEST_DIR, `${baseName}.json`);

    if (fs.existsSync(jsonPath)) {
      console.log(`✅ Already converted: ${baseName}.json`);
      continue;
    }

    try {
      const tgsData = fs.readFileSync(tgsPath);
      const jsonBuf = zlib.gunzipSync(tgsData);

      JSON.parse(jsonBuf.toString('utf8'));

      fs.writeFileSync(jsonPath, jsonBuf);
      console.log(`🆕 Converted: ${baseName}.json`);
    } catch (e) {
      console.error(`❌ Failed to convert ${tgsPath}:`, e.message);
    }
  }

  console.log('🏁 Done!');
});
