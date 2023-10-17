import helper from '../base-code/plugin.mjs';
import json from '@rollup/plugin-json';
import node from '@rollup/plugin-node-resolve';

const plugins = (mode) => [helper(mode), json(), node()];

//rollup 4.x supports both assertions and attributes
export default [
  {
    input: '../base-code/assertion/main.js',
    output: [{ file: './dist/main.assertion', format: 'es' }],
    plugins: plugins('assertion'),
  },
  {
    input: '../base-code/attributes/main.js',
    output: [{ file: './dist/main.attributes', format: 'es' }],
    plugins: plugins('attributes'),
  },
];
