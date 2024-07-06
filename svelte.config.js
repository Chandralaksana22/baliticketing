import preprocess from 'svelte-preprocess';
import adapter  from '@sveltejs/adapter-auto';
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
	]
};

export default config;