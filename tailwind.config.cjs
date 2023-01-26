/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			// Default tailwind breakpoints + 2xs, xs, 2md for more flexibility
			'3xs': '375px', // iPhone SE
			'2xs': '480px',
			xs: '576px',
			sm: '640px',
			md: '768px', // iPad
			'2md': '896px',
			lg: '1024px', // iPad Pro (landscape iPad)
			xl: '1280px', // Laptop
			'2xl': '1536px' // Desktop
		},
		extend: {}
	},
	corePlugins: {
		aspectRatio: false
	},
	future: {
		hoverOnlyWhenSupported: true
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
}
