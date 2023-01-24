import { defineConfig, configDefaults } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		setupFiles: './vitesSetup.ts',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		coverage: {
			all: true,
			reporter: ['text', 'html'],
			src: ['./src'],
			exclude: configDefaults.coverage.exclude?.concat(['src/**/+page.server.ts', 'src/**/+page.ts'])
		}
	},
	resolve: {
		alias: {
			'@components': resolve('./src/components'),
			'@lib': resolve('./src/lib'),
			'@markdown': resolve('./markdown'),
			'@styles': resolve('./src/styles'),
			'@stores': resolve('./src/stores')
		}
	}
})
