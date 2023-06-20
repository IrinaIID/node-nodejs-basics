import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  fs.stat(path.resolve(__dirname, 'files', 'fileToRead.txt'), (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.readFile(path.resolve(__dirname, 'files', 'fileToRead.txt'), 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
      })
    }
  });
};

await read();