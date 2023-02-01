/**
 * Adjust remark-reading-time default wpm (default 200 wpm)
 */
export const wordsPerMinute = 50

/**
 * Default tailwind breakpoints (sm, md, lg, xl, 2xl)
 * Additional smaller breakpoints: 2xs, xs,
 * Additional Tablet breakpoint: 2md for more flexibility
 */
export const screens = {
	'3xs': '375px', // iPhone SE
	'2xs': '430px',
	xs: '576px',
	sm: '640px',
	md: '768px', // iPad
	'2md': '896px',
	lg: '1024px', // iPad Pro (landscape iPad)
	xl: '1280px', // Laptop
	'2xl': '1536px' // Desktop
} as const

export type ScreensType = typeof screens
