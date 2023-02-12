// @ts-nocheck
import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import mdsvexConfig from './mdsvex.config.mjs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true, preserve: ['partytown'] }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: resolve('./src/lib'),
		},
	},
}

export default config
