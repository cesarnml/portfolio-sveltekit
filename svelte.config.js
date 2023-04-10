// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { withSentryConfig } from '@sentry/svelte'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess({ postcss: true, preserve: ['partytown'] }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: resolve('./src/lib'),
		},
	},
}

export default withSentryConfig(config)
