import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { resolve } from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			'@components': resolve('./src/components'),
			'@lib': resolve('./src/lib'),
			'@markdown': resolve('./markdown'),
			'@styles': resolve('./src/styles')
		}
	}
}

export default config
