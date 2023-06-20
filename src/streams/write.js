import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const { stdin } = process;
  const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'), 'utf-8');
  console.log('Enter your text in console');
  stdin.on('data', data => writebleStream.write(data));
};

await write();