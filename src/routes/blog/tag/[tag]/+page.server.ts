import type { Config } from '@sveltejs/adapter-vercel'
import { error } from '@sveltejs/kit'
import { fetchPosts } from '$lib/content'
import type { PageServerLoad } from './$types'

export const config: Config = {
	isr: {
		expiration: 24 * 60 * 60, // 1 day
	},
}

export const load: PageServerLoad = async ({ params: { tag } }) => {
	const postByTag = await fetchPosts({ tag })

	if (!postByTag.length) {
		throw error(428, 'No posts found')
	}

	return {
		posts: postByTag,
	}
}
