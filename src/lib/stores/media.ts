import watchMedia from 'svelte-media'

/**
 * **NOTE:**
 * `media` store *must* remain in sync with `screens` declared in `tailwind.config.cjs`
 */
const mediaQueries = {
	'4xs': '(min-width: 320px)',
	'3xs': '(min-width: 375px)',
	'2xs': '(min-width: 480px)',
	xs: '(min-width: 576px)',
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	'2md': '(min-width: 896px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
	'2xl': '(min-width: 1536px)',
} as const

export const media = watchMedia(mediaQueries)
