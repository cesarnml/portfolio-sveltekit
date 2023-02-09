import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	try {
		const postModule = (await import(`../../../content/blog/${params.slug}/index.md`)) as App.MdsvexModule

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}

		const { html } = postModule.default.render()

		return {
			html,
			frontmatter: postModule.metadata,
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}) satisfies PageServerLoad
