import typescript from 'rollup-plugin-typescript2';

const config = {
  input: "src/index.tsx",
  output: [
    {
      format: "es",
      file: "dist/index.js"
    }
  ],
  external: ["react"],
  plugins: [
    typescript()
  ]
};
export default config;
