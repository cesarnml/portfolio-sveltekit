import { fetchAllTags, fetchPosts } from '@lib/content'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts()
	const tags = await fetchAllTags()
	return { posts, tags }
}