import { defineConfig, loadEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { sentrySvelteKit } from '@sentry/sveltekit'
import Inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths'
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
// @ts-expect-error tough type
const config = defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
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
			imagetools(),
			Inspect({
				build: true,
				outputDir: '.vite-inspect',
			}),
			isProduction
				? sentrySvelteKit({
						adapter: 'vercel',
						sourceMapsUploadOptions: {
							org: env.PUBLIC_SENTRY_ORG,
							project: env.PUBLIC_SENTRY_PROJECT,
							authToken: env.SENTRY_AUTH_TOKEN,
							telemetry: false,
							cleanArtifacts: true,
							setCommits: {
								auto: true,
							},
						},
				  })
				: '',
			sveltekit(),
			tsconfigPaths(),
			purgeCss()
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
				provider: 'istanbul', // or 'v8',
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
