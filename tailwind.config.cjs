/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			// Default tailwind breakpoints + 2xs, xs, 2md for more flexibility
			'2xs': '375px', // iPhone SE
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
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio')
	]
}
