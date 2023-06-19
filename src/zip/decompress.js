import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  fs.stat(path.resolve(__dirname, 'files', 'archive.gz'), (err) => {
    if (err) {
      console.log('There is no file archive.gz. Please at first compress file fileToCompress.txt');
    } else {
      const unzip = zlib.createUnzip();
      const input = fs.createReadStream(path.resolve(__dirname, 'files', 'archive.gz'));
      const output = fs.createWriteStream(path.resolve(__dirname, 'files', 'newFile.txt'));
      input.pipe(unzip).pipe(output);
    }
  });
};

await decompress();