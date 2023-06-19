import { stdin, stdout } from 'process';
import stream from 'stream';


const transform = async () => {
  stdin.on('data', data => stdout.write(data.toString().toLocaleUpperCase()))
};

await transform();