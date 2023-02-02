import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import { configDefaults, type UserConfig as VitestConfig } from 'vitest/config'
import { imagetools } from '@zerodevx/svelte-img/vite'

const config: UserConfig & { test: VitestConfig['test'] } = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: () => new URLSearchParams('?width=480;1024;1920&format=avif;webp;jpg&lqip=128&run'),
		}),
	],
	define: {
		// Eliminate in-source test code
		'import.meta.vitest': 'undefined',
	},
	resolve: {
		alias: {
			'@assets': resolve('./src/assets'),
			'@components': resolve('./src/components'),
			'@lib': resolve('./src/lib'),
			'@content': resolve('./src/content'),
			'@styles': resolve('./src/styles'),
			'@stores': resolve('./src/stores'),
		},
	},
	// ref: https://github.com/vitest-dev/vitest/issues/821
	test: {
		deps: {
			inline: ['clsx'],
		},
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

export default config
