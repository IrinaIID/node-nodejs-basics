import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const { stdin, stdout } = process;

  const transform = new Transform({
    transform(data, encoding, callback) {
      callback(null, data.toString().split('').reverse().join(''));
    },
  });

  pipeline(stdin, transform, stdout);
};

await transform();