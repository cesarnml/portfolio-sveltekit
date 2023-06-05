// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import { vitePreprocess } from '@sveltejs/kit/vite'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	vitePlugin: {
		inspector: {
			toggleButtonPos: 'bottom-right',
		},
	},

	preprocess: [vitePreprocess({ postcss: true, preserve: ['partytown'] }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: resolve('./src/lib'),
		},
	},
}

export default config
