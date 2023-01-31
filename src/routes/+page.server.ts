import type { PageServerLoad } from './$types'
import { basename, dirname } from 'path'

const MAX_POSTS = 10

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob(`@content/blog/**/*.md`, { eager: true })

	const posts = Object.entries(modules).map(([path, svxModule]) => {
		const slug = slugify(basename(dirname(path)))
		const html = (svxModule as App.MdsvexModule).default.render().html
		const metadata = (svxModule as App.MdsvexModule).metadata
		return { slug, html, ...metadata }
	})

	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS)

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return { posts: publishedPosts }
}

function slugify(text: string) {
	return text
		.toString() // Cast to string (optional)
		.normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string (optional)
		.replace(/\s+/g, '-') // Replace spaces with hyphen
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple hyphen with single hyphen
		.replace(/(^-|-$)/g, '') // Remove leading or trailing hyphen
}
