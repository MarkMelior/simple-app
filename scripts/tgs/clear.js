import fs from 'fs';
import path from 'path';

import { DEST_DIR, SAVE_DIR, SRC_DIR } from './constants.js';

// ─────────────────────────────────────────
// 🧹  Очистка каталогов с исключениями
// ─────────────────────────────────────────
/** Файлы (relative → absolute), которые нельзя трогать */
const keep = new Set([
  path.join(SRC_DIR, 'emoji-for-test.tgs'),
  path.join(DEST_DIR, 'emoji-for-test.json'),
]);

/**
 * Рекурсивно чистим dir.
 * Удаляем файлы, не входящие в keep; удаляем пустые папки.
 */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (keep.has(full)) continue;

    if (entry.isDirectory()) {
      walk(full);
      if (fs.readdirSync(full).length === 0) fs.rmdirSync(full);
      continue;
    }

    const isFromAssets = full.startsWith(SRC_DIR);

    if (isFromAssets) {
      const rel = path.relative(SRC_DIR, full);
      const dest = path.join(SAVE_DIR, rel);

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.renameSync(full, dest);
      console.log(`💾 Saved: ${rel}`);
    } else {
      fs.unlinkSync(full);
    }
  }
}

fs.mkdirSync(SAVE_DIR, { recursive: true });

[SRC_DIR, DEST_DIR].forEach((dir) => {
  if (fs.existsSync(dir)) walk(dir);
  else fs.mkdirSync(dir, { recursive: true });
});

console.log('✅ Каталоги очищены; содержимое assets сохранено в “saved”.\n');
