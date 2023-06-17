import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  fs.stat(path.resolve(__dirname, './files', 'fileToRemove.txt'), (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.unlink(path.resolve(__dirname, './files', 'fileToRemove.txt'), err => {
        if(err) throw err;
      });
    }
  });
};

await remove();