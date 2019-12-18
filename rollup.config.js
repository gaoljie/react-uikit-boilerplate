import typescript from 'rollup-plugin-typescript2';

const config = {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/index.js"
    },
    {
      format: "es",
      file: "dist/index.mjs"
    }
  ],
  plugins: [
    typescript()
  ]
};
export default config;
