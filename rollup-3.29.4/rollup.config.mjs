import helper from "../base-code/plugin.mjs"
import json from "@rollup/plugin-json"
import node from "@rollup/plugin-node-resolve"
export default [
  {
    input: '../base-code/assertion/main.js',
    output: [
      { file: './dist/main', format: 'es' },
    ],
    plugins: [
      helper("assertion"),
      json(),
      node()
    ],
  },
]
