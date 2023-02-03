import { fetchPosts } from '@lib/content'
import type { PageServerLoad } from './$types'

// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = true

// Allows client side routing. Necessary for page transitions and link prefetching; change to false if you prefer ordinary routing without JS
export const csr = true

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts()
	return { posts }
}
