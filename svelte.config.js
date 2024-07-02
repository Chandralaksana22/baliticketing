import preprocess from 'svelte-preprocess';
import adapter  from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	kit: {
		adapter: adapter (),
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