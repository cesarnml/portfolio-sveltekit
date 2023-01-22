import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	try {
		const postModule = (await import(`../../../../markdown/posts/${params.slug}/index.md`)) as App.MdsvexModule

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}

		const html = postModule.default.render().html

		return {
			html,
			frontmatter: postModule.metadata
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}) satisfies PageServerLoad
