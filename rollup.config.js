const { esnext, module: esModule, main } = require('./package.json');

module.exports = {
  input: esnext,
  output: [
    {
      file: esModule,
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
