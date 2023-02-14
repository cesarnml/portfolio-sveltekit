import type { UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults, type UserConfig as VitestConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

const config: UserConfig & { test: VitestConfig['test'] } = {
	plugins: [sveltekit(), SvelteKitPWA(), imagetools()],
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

export default config
