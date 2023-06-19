import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const { stdout } = process;
  const readebleStream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
  readebleStream.on('data', chunk => {
    stdout.write(chunk);
  });
};

await read();