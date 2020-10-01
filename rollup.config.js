import { esnext, module, main } from './package.json';

export default {
  input: esnext,
  output: [
    {
      file: module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: main,
      format: 'cjs',
      sourcemap: true,
    }
  ],
};
