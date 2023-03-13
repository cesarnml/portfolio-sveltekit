import { prisma } from '$lib/prismaClient'
import { fetchAllTags, fetchPosts } from '$lib/content'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const views = await prisma.view.findMany()
	const posts = await fetchPosts()
	const tags = await fetchAllTags()
	return { posts, tags, views }
}

export const prerender = true
