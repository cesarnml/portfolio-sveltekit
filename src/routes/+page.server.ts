import type { Config } from '@sveltejs/adapter-vercel'
import { fetchPosts } from '$lib/content'

export const config: Config = {
	isr: {
		expiration: 60 * 60, // 1 hour
	},
}

export const load = async () => {
	const posts = await fetchPosts()
	return { posts }
}
