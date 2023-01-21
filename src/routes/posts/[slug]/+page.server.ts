import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import * as readingTime from 'reading-time'

type Params = {
	slug: string
}

type Props = {
	params: Params
}

export const load: PageLoad = async ({ params }: Props) => {
	try {
		const postModule = (await import(`../../../../markdown/posts/${params.slug}/index.md`)) as App.MdsvexModule
		const html = postModule.default.render().html

		if (!postModule || !postModule.metadata.published) {
			throw error(404, 'Post not found') // Couldn't resolve the post
		}
		return {
			html,
			frontmatter: { ...postModule.metadata, readingTime: readingTime.default(html).text }
		}
	} catch (err) {
		throw error(428, 'I am a teacup')
	}
}
