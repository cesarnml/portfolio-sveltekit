import { prisma } from '$lib/prismaClient'
import { fetchPosts } from '$lib/content'

export const load = async () => {
	const views = await prisma.view.findMany()
	const posts = await fetchPosts()
	return { posts, views }
}
