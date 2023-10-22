import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	vitePlugin: {
		// This enables compile-time warnings to be
		// visible in the learn.svelte.dev editor
		onwarn: (warning, defaultHandler) => {
			console.log('svelte:warnings:%s', JSON.stringify(warning));
			defaultHandler(warning);
		}
	}
};

export default config;
