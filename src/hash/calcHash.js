import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  fs.readFile(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(createHash('sha256').update(data).digest('hex'));
  });
};

await calculateHash();