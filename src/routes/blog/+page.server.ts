import type { Config } from '@sveltejs/adapter-vercel'
import { prisma } from '$lib/prismaClient'
import { fetchPosts } from '$lib/content'

export const config: Config = {
	isr: {
		expiration: 24 * 60 * 60, // 1 day
	},
}

export const load = async () => {
	const views = await prisma.view.findMany()
	const posts = await fetchPosts()
	return { posts, views }
}
