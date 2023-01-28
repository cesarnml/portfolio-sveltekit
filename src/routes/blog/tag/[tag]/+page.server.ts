import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { basename, dirname } from 'path'

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob(`@markdown/posts/**/*.md`, { eager: true })

	const posts = Object.entries(modules).map(([path, svxModule]) => {
		const slug = basename(dirname(path))
		const html = (svxModule as App.MdsvexModule).default.render().html
		const metadata = (svxModule as App.MdsvexModule).metadata
		return { slug, html, ...metadata }
	})
	console.log('posts:', posts)

	if (posts.length === 0) {
		throw error(404, 'No posts found')
	}
	const postsByTag = (tag: string) =>
		posts
			.filter((post) => post.tags.includes(tag) && post.published)
			.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return { posts: postsByTag(params.tag) }
}
