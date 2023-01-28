import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import mdsvexConfig from './mdsvex.config.mjs'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: resolve('./src/lib')
		}
	}
}

export default config
