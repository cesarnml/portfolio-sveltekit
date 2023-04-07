import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
// import { sentryVitePlugin } from '@sentry/vite-plugin'
import Inspect from 'vite-plugin-inspect'

const config = defineConfig(() =>
	// const env = loadEnv(mode, process.cwd(), '')
	({
		envPrefix: 'VITE_',
		build: {
			sourcemap: true,
		},
		plugins: [
			sveltekit(),
			imagetools(),
			Inspect({
				build: true,
				outputDir: '.vite-inspect',
			}),
			// sentryVitePlugin({
			// 	telemetry: false,
			// 	org: env.PUBLIC_SENTRY_ORG,
			// 	project: env.PUBLIC_SENTRY_PROJECT,
			// 	include: './svelte-kit/output',
			// 	authToken: env.SENTRY_AUTH_TOKEN,
			// }),
		],
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: ['./setupTest.ts'],
			include: ['src/**/*.{test,spec}.{js,ts}'],
			coverage: {
				all: true,
				reporter: ['json', 'html', 'text'],
				src: ['./src'],
			},
			// Exclude playwright tests folder
			exclude: [...configDefaults.exclude, 'tests'],
		},
	}),
)

export default config
