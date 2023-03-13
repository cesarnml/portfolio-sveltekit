import { fetchPosts } from '$lib/content'

export const load = async () => {
	const posts = await fetchPosts()
	return { posts }
}
