import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
// import * as readingTime from 'reading-time'

export const load = (async ({ params }) => {
	try {
		const postModule = (await import(`../../../../markdown/posts/${params.slug}/index.md`)) as App.MdsvexModule

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}

		const html = postModule.default.render().html
		// const readingTimeText = readingTime.default(html).text

		return {
			html,
			// frontmatter: { ...postModule.metadata, readingTime: readingTimeText }
			frontmatter: postModule.metadata
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}) satisfies PageServerLoad
