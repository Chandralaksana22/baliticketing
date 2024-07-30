import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	plugins: [
		sveltekit(),
		ViteMinifyPlugin({}),
		compression({
			algorithm: 'gzip',
			ext: '.gz',
		}),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
		}),
	],
	build: {
		minify: 'terser',
		target: 'es2015',
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1500,
		sourcemap: true,
	},
});
