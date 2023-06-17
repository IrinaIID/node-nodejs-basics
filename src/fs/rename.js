import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  fs.stat(path.resolve(__dirname, './files', 'wrongFilename.txt'), (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.rename(
        path.resolve(__dirname, './files', 'wrongFilename.txt'),
        path.resolve(__dirname, './files', 'properFilename.md'),
        err => {
          if(err) throw err;
        }
      )
    }
  });
};

await rename();