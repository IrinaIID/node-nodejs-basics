import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const fsPromises = fs.promises;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  fs.stat(path.resolve(__dirname, './files', 'fresh.txt'), (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    } else {
      fsPromises.writeFile(path.resolve(__dirname, './files', 'fresh.txt'), 'I am fresh and young');
    }
  });
};

await create();