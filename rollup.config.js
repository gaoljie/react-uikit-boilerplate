import ts from "@wessberg/rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import svgSprite from "rollup-plugin-svg-sprite";
import multi from "@rollup/plugin-multi-entry";
import glob from "glob";
import merge from "webpack-merge";

const base = {
  external: ["react", "react-dom", "styled-components"],
  plugins: [ts(), resolve(), multi()]
};

const entries = glob
  .sync("./src/components/**/index.ts?(x)")
  .map(item => {
    return item.split("/")[3];
  })
  .map(componentName => {
    return {
      input: `src/components/${componentName}/index.ts?(x)`,
      output: {
        file: `lib/${componentName}/index.js`,
        format: "cjs",
        sourcemap: true
      },
      ...base
    };
  });

const config = [
  merge(
    {
      input: ["src/components/**/index.ts?(x)", "src/svg/**/*.svg"],
      output: [
        {
          format: "cjs",
          file: "lib/index.js",
          sourcemap: true
        }
      ]
    },
    base,
    {
      plugins: [
        svgSprite({
          outputFolder: "lib"
        })
      ]
    }
  ),
  ...entries
];
export default config;
