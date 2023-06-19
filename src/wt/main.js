import { Worker, workerData } from 'worker_threads';

const performCalculations = async () => {
  const worker = new Worker('./worker.js', {
    workerData: 2
  });
    // Write your code here
    // console.log('ggg')
};

await performCalculations();