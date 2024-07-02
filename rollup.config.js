import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
const CompressionPlugin = require('compression-webpack-plugin');
export default {
  plugins: [
    terser({ module: true }),
    svelte({
        minify: true
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 8192,
        minRatio: 0.8
      })
  ],
  dev: false,
};
