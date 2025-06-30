import path from 'path';
import { fileURLToPath } from 'url';

const [,, srcDirArg, destDirArg] = process.argv;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const SRC_DIR = srcDirArg || path.resolve(__dirname, 'assets');
export const DEST_DIR = destDirArg || path.resolve(__dirname, 'converted');
export const SAVE_DIR = destDirArg || path.resolve(__dirname, 'archive');
