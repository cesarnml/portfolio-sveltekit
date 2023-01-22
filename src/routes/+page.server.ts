import type { PageServerLoad } from './$types'
import { basename, dirname } from 'path'

const MAX_POSTS = 10

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob(`@markdown/posts/**/*.md`, { eager: true })

	const posts = Object.entries(modules).map(([path, svxModule]) => {
		const slug = basename(dirname(path))
		const html = (svxModule as App.MdsvexModule).default.render().html
		const metadata = (svxModule as App.MdsvexModule).metadata
		return { slug, html, ...metadata }
	})

	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS)

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return { posts: publishedPosts }
}
