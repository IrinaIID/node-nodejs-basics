import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const { stdin, stdout } = process;
  const child = fork(path.resolve(__dirname, 'files', 'script.js'), args, {
    silent: true
  });

  child.on('error', (err) => {
    throw new Error(`error in child process ${err.message}`)
  });

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, 21, 3]);
