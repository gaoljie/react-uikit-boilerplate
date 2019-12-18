import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";

const config = {
  input: "src/index.ts",
  output: [
    {
      format: "es",
      file: "dist/index.js"
    }
  ],
  external: ["react"],
  plugins: [typescript(), resolve()]
};
export default config;
