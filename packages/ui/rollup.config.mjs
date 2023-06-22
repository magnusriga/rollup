import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

import tailwindConfig from './tailwind.config.js';
import preserveDirectives from 'rollup-plugin-preserve-directives';

import pkg from "./package.json" assert { type: "json" };

export default {
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies || []),
    "react/jsx-runtime",
  ],
  input: "src/index.tsx",
  output: {
    // file: "dist/index.js",
    dir: "dist",
    preserveModules: true,
    format: "cjs",
    interop: "auto",
  },
  watch: {
    include: "src/**",
  },
  plugins: [
    preserveDirectives(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: [".css", ".module.css"],
      extract: true,
      plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
      // plugins: [tailwindcss(tailwindConfig)],
    }),
    typescript({ include: "src/**/*.{js,ts,jsx,tsx}" }),
  ],
};
