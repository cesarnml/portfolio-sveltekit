import { prisma } from '$lib/prismaClient'
import { fetchPosts } from '$lib/content'

export const load = async () => {
	console.log('LOADING SERVER')
	const views = await prisma.view.findMany()
	const posts = await fetchPosts({ offset: 0, limit: 2 })
	return { posts, views }
}
