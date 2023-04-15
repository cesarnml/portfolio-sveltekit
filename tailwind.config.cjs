/**
 * Default tailwind breakpoints (sm, md, lg, xl, 2xl)
 * Additional smaller breakpoints: 2xs, xs,
 * Additional Tablet breakpoint: 2md for more flexibility
 */
const screens = {
	'3xs': '375px', // iPhone SE
	'2xs': '430px',
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
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		screens,
		extend: {
			typography: {
				DEFAULT: {
					css: {
						blockquote: {
							borderLeft: '3px solid red',
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'medium',
						},
						'blockquote p:first-of-type::before': {
							content: '',
						},
						'blockquote p:last-of-type::after': {
							content: '',
						},

						'code::before': false,
						'code::after': false,
						code: {
							color: 'var(--ifm-color)',
							'border-radius': '0.25rem',
							padding: '0.15rem 0.3rem',
							borderWidth: '2px',
							borderColor: 'rgba(0,0,0,0.3)',
						},
						'.dark code': {
							borderColor: 'rgba(230, 200, 51,.3)',
						},
						'.dark a:hover': {
							color: 'rgb(230, 200, 51)',
						},
						'.dark a': {
							color: 'rgb(230, 240, 51)',
							textDecoration: 'none',
						},
						a: {
							color: 'darkblue',
							textDecoration: 'none',
						},
						'a:hover': {
							color: 'blue',
						},
						'a code': {
							color: 'unset',
						},
						'li, ul, ol': {
							margin: 0,
						},
						'li > img': {
							margin: 0,
							display: 'inline',
						},
						'ol > li::marker': {
							color: 'var(--tw-prose-body)',
						},
						'ul > li::marker': {
							color: 'var(--tw-prose-body)',
						},
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
	],
}
