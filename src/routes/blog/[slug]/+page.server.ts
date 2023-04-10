import type { Config } from '@sveltejs/adapter-vercel'
import { error } from '@sveltejs/kit'
import { prisma } from '$lib/prismaClient'

export const config: Config = {
	isr: {
		expiration: 24 * 60 * 60, // 1 day
	},
}
export const load = async ({ params }) => {
	try {
		const postModule = (await import(
			`../../../lib/content/blog/${params.slug}/index.md`
		)) as App.MdsvexModule

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}

		const { html } = postModule.default.render()

		const view = await prisma.view.upsert({
			where: {
				slug: params.slug,
			},
			update: {
				count: {
					increment: 1,
				},
			},
			create: {
				slug: params.slug,
				count: 1,
			},
		})

		return {
			html,
			frontmatter: postModule.metadata,
			view,
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}
