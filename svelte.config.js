// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	vitePlugin: {
		inspector: {
			toggleButtonPos: 'bottom-right',
		},
	},

	preprocess: [mdsvex(mdsvexConfig), vitePreprocess({ postcss: true, preserve: ['partytown'] })],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			'$lib/*': './src/lib/*',
			$app: './node_modules/@sveltejs/kit/types',
			'$app/*': './node_modules/@sveltejs/kit/types/ambient.d.ts',
		},
	},
}

export default config
