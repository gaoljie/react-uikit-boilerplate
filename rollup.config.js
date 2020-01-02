import ts from "@wessberg/rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";

const config = {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/index.js"
    }
  ],
  external: ["react", "styled-components"],
  plugins: [ts(), resolve()]
};
export default config;
