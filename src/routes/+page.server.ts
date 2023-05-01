import type { Config } from '@sveltejs/adapter-vercel'
import orderBy from 'lodash/orderBy'
import { fetchPosts } from '$lib/content'
import { prisma } from '$lib/prismaClient'

export const config: Config = {
	isr: {
		expiration: 60 * 60, // 1 hour
	},
}

export const load = async () => {
	const posts = await fetchPosts()
	const views = await prisma.view.findMany()

	const latestPosts = posts.slice(0, 2)
	const popularPosts = orderBy(
		posts,
		(post) => views.find((view) => view.slug === post.slug)?.count,
		'desc',
	).slice(0, 2)

	return { latestPosts, popularPosts, views }
}
