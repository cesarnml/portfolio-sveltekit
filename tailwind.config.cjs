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
		extend: {},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
	],
}
