import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  fs.stat(path.resolve(__dirname, 'files'), (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
        if (err) throw err;
        files.forEach(doc => {
          console.log(doc);
        });
      })
    }
  });
};

await list();
