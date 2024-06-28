import preprocess from 'svelte-preprocess';
import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	kit: {
		adapter: nodeAdapter(),
		alias: {
			$assets: '/src/assets',
			$lib: '/src/lib'
		},
	},
	preprocess: [
		preprocess({
			postcss: false
		}),
		vitePreprocess(),
	]
};

export default config;