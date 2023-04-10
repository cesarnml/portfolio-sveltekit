import { defineConfig, loadEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import Inspect from 'vite-plugin-inspect'

const config = defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

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
			sentryVitePlugin({
				org: env.PUBLIC_SENTRY_ORG,
				project: env.PUBLIC_SENTRY_PROJECT,
				// telemetry: false,
				// include: './svelte-kit/output',
				authToken: env.SENTRY_AUTH_TOKEN,
			}),
		],
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: ['./setupTest.ts', 'src/mocks/setup.ts'],
			include: ['src/**/*.{test,spec}.{js,ts}'],
			coverage: {
				all: true,
				reporter: ['json', 'html', 'text'],
				src: ['./src'],
				exclude: [
					'src/lib/external',
					'src/lib/typings',
					'src/routes/**/+page.svelte',
					'src/routes/**/+layout.svelte',
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
