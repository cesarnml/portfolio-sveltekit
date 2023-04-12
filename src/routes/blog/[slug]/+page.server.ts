import type { Config } from '@sveltejs/adapter-vercel'
import { error } from '@sveltejs/kit'
import dayjs from 'dayjs'
import { prisma } from '$lib/prismaClient'

export const config: Config = {
	isr: {
		expiration: 1, // 1 second
	},
}

export const load = async ({ params }) => {
	try {
		const postModule = (await import(
			`../../../lib/content/blog/${params.slug}.md`
		)) as App.MdsvexModule

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}

		const { html } = postModule.default.render()

		const view = await prisma.view.findUnique({
			where: {
				slug: params.slug,
			},
		})

		return {
			html,
			frontmatter: {
				...postModule.metadata,
				date: dayjs(postModule.metadata.date).format('DD MMM YYYY'),
			},
			view,
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}
