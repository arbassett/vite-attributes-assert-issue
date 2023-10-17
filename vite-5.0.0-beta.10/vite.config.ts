import { defineConfig } from "vite"
import helper from "../base-code/plugin.mjs"

export default defineConfig({
  root: "../base-code/attributes",
  plugins: [
    helper("assertion")
  ]
})