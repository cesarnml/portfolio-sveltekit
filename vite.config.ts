import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { sentrySvelteKit } from '@sentry/sveltekit'
import Inspect from 'vite-plugin-inspect'

// @ts-expect-error tough type
const config = defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
	return {
		build: {
			sourcemap: true,
		},
		define: {
			// Eliminate in-source test code
			'import.meta.vitest': 'undefined',
		},
		plugins: [
			sveltekit(),
			imagetools(),
			Inspect({
				build: true,
				outputDir: '.vite-inspect',
			}),
			isProduction ? sentrySvelteKit({ adapter: 'vercel' }) : '',
		],
		test: {
			globals: true,
			environment: 'jsdom',
			reporters: ['default', 'html'],
			setupFiles: ['./setupTest.ts', 'src/mocks/setup.ts'],
			include: ['src/**/*.{test,spec}.{js,ts}'],
			coverage: {
				all: true,
				enabled: true,
				reporter: ['json', 'html', 'text'],
				src: ['./src'],
				exclude: [
					'src/lib/external',
					'src/lib/typings',
					'src/routes/**/+page.svelte',
					'src/routes/**/+layout.svelte',
					'src/routes/**/+page*.ts',
					'src/routes/**/+layout*.ts',
					'src/routes/**/+error.svelte',
					'src/hooks.client.ts',
					'src/hooks.server.ts',
					'src/**/*.{test,spec}.{js,ts}',
					'src/**/*.d.ts',
				],
			},
			deps: {
				inline: [/msw/],
			},
			// Exclude playwright tests folder
			exclude: [
				...configDefaults.exclude,
				'tests',
				'setupTest.ts',
				'src/mocks',
				'src/lib/external',
			],
		},
	}
})

export default config
