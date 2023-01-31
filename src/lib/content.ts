import { basename, dirname } from 'path'

const NO_LIMIT_FLAG = -1

/**
 * Returns a sorted an array of blog posts
 */
export async function fetchPosts({ offset = 0, limit = NO_LIMIT_FLAG, tag = '' } = {}) {
	const modules = import.meta.glob(`@content/blog/**/*.md`)
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const slug = basename(dirname(path))
			const module = (await resolver()) as App.MdsvexModule
			const html = module.default.render().html
			const metadata = module.metadata
			return { slug, html, ...metadata }
		})
	)

	let sortedPosts = posts.filter((post) => post.published)

	if (tag) {
		sortedPosts = sortedPosts.filter((post) => post.tags.includes(tag))
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}

	if (limit && limit < sortedPosts.length && limit !== NO_LIMIT_FLAG) {
		sortedPosts = sortedPosts.slice(0, limit)
	}
	return sortedPosts
}

export async function fetchAllTags() {
	const posts = await fetchPosts()
	const tags = [...new Set(posts.map((post) => post.tags).flat())]
	return tags
}

export async function fetchAbout() {
	const aboutModule = await import(`../content/about/index.md`)

	const about = await Promise.all(
		Object.entries(aboutModule).map(async ([path, resolver]) => {
			const slug = basename(dirname(path))
			const module = (await resolver()) as App.MdsvexModule
			const html = module.default.render().html
			const metadata = module.metadata
			return { slug, html, ...metadata }
		})
	)
}

// ref: https://github.com/cesarnml/sveltekit-blog-starter/blob/62bed7db2d872206b86cefa74d01ac7290ade301/src/lib/assets/js/fetchPosts.js#L9
