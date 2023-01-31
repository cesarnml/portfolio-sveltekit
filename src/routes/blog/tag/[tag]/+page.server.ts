import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { basename, dirname } from 'path'

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob(`@content/blog/**/*.md`, { eager: true })

	const posts = Object.entries(modules).map(([path, svxModule]) => {
		const slug = basename(dirname(path))
		const html = (svxModule as App.MdsvexModule).default.render().html
		const metadata = (svxModule as App.MdsvexModule).metadata
		return { slug, html, ...metadata }
	})

	const postsByTag = (tag: string) =>
		posts
			.filter((post) => post.tags.includes(tag) && post.published)
			.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	if (postsByTag(params.tag).length === 0) {
		throw error(404, 'No posts found')
	}

	return { posts: postsByTag(params.tag) }
}
