import { json } from '@sveltejs/kit'
import { fetchPosts } from '$lib/content'

// TODO: Improve type safety
export const GET = async ({ url }) => {
	console.log('url:', url)
	const offset = (url.searchParams.get('offset') ?? 0) as number
	const limit = (url.searchParams.get('limit') ?? 1) as number
	const tag = url.searchParams.get('tag') ?? ''

	const posts = await fetchPosts({ offset, limit, tag })
	console.log(
		'posts:',
		posts.map((p) => p.title),
	)

	return json(posts)
}
