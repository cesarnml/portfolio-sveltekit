import { loadEnv, defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { purgeCss } from 'vite-plugin-svelte-purgecss'
import Inspect from 'vite-plugin-inspect'

const config = defineConfig(({ command, mode }) => {
	console.log('command:', command)
	console.log('mode:', mode)

	const env = loadEnv(mode, process.cwd(), '')

	return {
		envPrefix: 'VITE_',
		build: {
			sourcemap: true,
		},
		plugins: [
			sveltekit(),
			imagetools(),
			purgeCss(),
			Inspect({
				build: true,
				outputDir: '.vite-inspect',
			}),
			sentryVitePlugin({
				telemetry: false,
				org: env.PUBLIC_SENTRY_ORG,
				project: env.PUBLIC_SENTRY_PROJECT,
				include: './svelte-kit/output',
				authToken: env.SENTRY_AUTH_TOKEN,
			}),
		],
		test: {
			// jest like globals
			globals: true,
			environment: 'jsdom',
			// in-source testing
			includeSource: ['src/**/*.{js,ts,svelte}'],
			include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
			// Add @testing-library/jest-dom matchers & mocks of SvelteKit modules
			setupFiles: ['./setupTest.ts'],
			// Exclude files in c8
			coverage: {
				all: true,
				reporter: ['text', 'html'],
				src: ['./src'],
				exclude: configDefaults.coverage.exclude?.concat([
					'src/**/+page*.{ts,svelte}',
					'src/**/+layout*.{ts,svelte}',
					'setupTest.ts',
				]),
			},
			// Exclude playwright tests folder
			exclude: [...configDefaults.exclude, 'tests'],
		},
	}
})

export default config
