import ts from "@wessberg/rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import glob from "glob";

const base = {
  external: ["react", "styled-components"],
  plugins: [ts(), resolve()]
};

const entries = glob
  .sync("./src/components/**/index.tsx")
  .map(item => {
    return item.split("/")[3];
  })
  .map(componentName => {
    return {
      input: `src/components/${componentName}/index.tsx`,
      output: {
        file: `lib/${componentName}/index.js`,
        format: "cjs",
        sourcemap: true
      },
      ...base
    };
  });

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: "lib/index.js"
      }
    ],
    ...base
  },
  ...entries
];
export default config;
