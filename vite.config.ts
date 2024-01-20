import { defineConfig, loadEnv } from "vite";
// import NodeGlobal from '@esbuild-plugins/node-globals-polyfill'
// import NodeModules from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import glsl from "vite-plugin-glsl"
export default defineConfig({
  plugins: [glsl()]
});