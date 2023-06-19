import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { rejects } from 'assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numOfProcessorCore = os.cpus().length;

  const funcCalculation = (workerData) => new Promise((resolve) => {
    const worker = new Worker(path.resolve(__dirname, './worker.js'), { workerData });
    worker.on('message', (message) => resolve( {
      status: 'resolved',
      data: message
    }));
    worker.on('error', (err) => resolve( {
      status: 'error',
      data: null
    }));
  });

  const arrNumCores = [];

  for (let i = 0; i < numOfProcessorCore; i++) {
    arrNumCores.push(funcCalculation(i + 10));
  }

  const result = await Promise.all(arrNumCores);
  console.log(result);
};

await performCalculations();