import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const copy = async () => {
  fs.stat(path.resolve(__dirname, 'files_copy'), (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    } else {
      fs.cp(path.resolve(__dirname, 'files'), path.resolve(__dirname, 'files_copy'), { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  });
};

await copy();
