import watchMedia from 'svelte-media'

/**
 * **Note:**
 *
 * Media store *must* remain in sync with `screens` declared in `tailwind.config.cjs`
 */
const mediaQueries = {
	'2xs': '(min-width: 375px)',
	xs: '(min-width: 576px)',
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	'2md': '(min-width: 896px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
	'2xl': '(min-width: 1536px)'
}

export const media = watchMedia(mediaQueries)
