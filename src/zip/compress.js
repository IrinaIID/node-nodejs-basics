import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const input = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
  const output = fs.createWriteStream(path.resolve(__dirname, 'files', 'archive.gz'));
  const gzip = zlib.createGzip();
  input.pipe(gzip).pipe(output);
};

await compress();