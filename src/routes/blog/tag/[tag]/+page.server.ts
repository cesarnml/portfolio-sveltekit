import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { fetchPosts } from '@lib/content'

export const load: PageServerLoad = async ({ params: { tag } }) => {
	const postByTag = await fetchPosts({ tag })

	if (!postByTag.length) {
		throw error(428, 'No posts found')
	}

	return {
		posts: postByTag
	}
}
