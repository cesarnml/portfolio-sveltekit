// @ts-nocheck
/**
 * Default tailwind breakpoints (sm, md, lg, xl, 2xl)
 * Additional smaller breakpoints: 2xs, xs,
 * Additional Tablet breakpoint: 2md for more flexibility
 */
import { join } from 'path'
import { skeleton } from '@skeletonlabs/tw-plugin'

const screens = {
	'4xs': '320px', // iPhoneSE
	'3xs': '375px', // iPhoneMini
	'2xs': '430px', // iPhonePro Max
	xs: '576px',
	sm: '640px',
	md: '768px', // iPad
	'2md': '896px',
	lg: '1024px', // iPad Pro (landscape iPad)
	xl: '1280px', // Laptop
	'2xl': '1536px', // Desktop
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		screens,
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						h1: {
							marginBottom: '1rem',
							fontSize: '2rem',
						},
						h2: {
							marginBottom: '0.75rem',
							fontSize: '1.5rem',
						},
						h3: {
							marginBottom: '0.5rem',
							fontSize: '1.25rem',
						},
						picture: {
							marginTop: 0,
							marginBottom: 0,
						},
						a: {
							color: theme('colors.yellow.500'),
						},
						'a:hover': {
							color: theme('colors.yellow.600'),
						},
					},
				},
			}),
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		// @ts-ignore
		skeleton({
			themes: {
				preset: ['modern'],
			},
		}),
	],
}
