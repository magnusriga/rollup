import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.tsx",
  external: [
    "styled-components"
  ],
  output: [
    {
        file: 'build/index.js',
        format: "cjs",
        sourcemap: true,
        interop: 'auto',
    },
    {
        file: 'build/index.esm.js',
        format: "esm",
        sourcemap: true,
        interop: 'auto',
    }
 ],
 plugins: [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true, include: [ "./*.ts+(|x)", "./*.js+(|x)" ] })
  ]
};
