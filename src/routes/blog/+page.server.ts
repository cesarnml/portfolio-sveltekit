import { prisma } from '$lib/prismaClient'
import { fetchAllTags, fetchPosts } from '$lib/content'

export const load = async () => {
	const views = await prisma.view.findMany()
	const posts = await fetchPosts()
	const tags = await fetchAllTags()
	return { posts, tags, views }
}
