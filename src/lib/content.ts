import dayjs from 'dayjs'
import { basename, dirname } from 'path'
import adjustPostReadingTimeText from './blogHelpers'

const ALL_POST_FLAG = -1

/**
 * Returns a sorted an array of blog posts
 */
export async function fetchPosts({ offset = 0, limit = ALL_POST_FLAG, tag = '' } = {}) {
	const modules = import.meta.glob(`$lib/content/blog/**/*.md`)
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const slug = basename(dirname(path))
			const module = (await resolver()) as App.MdsvexModule
			const { html } = module.default.render()
			const { metadata } = module
			return { slug, html, ...metadata }
		}),
	)

	let sortedPosts = posts
		.filter((post) => post.published)
		.sort((a, b) => (dayjs(a.date).isBefore(b.date) ? 1 : -1))

	if (tag) {
		sortedPosts = sortedPosts.filter((post) => post.tags.includes(tag))
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}

	if (limit && limit < sortedPosts.length && limit !== ALL_POST_FLAG) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	//  Adjust readingTime.text
	//  NOTE: `time` and `minutes` will NOT be adjusted for new readingTime since we don't make use of them in the blog)
	sortedPosts = sortedPosts.map(adjustPostReadingTimeText)

	return sortedPosts
}

export async function fetchAllTags() {
	const posts = await fetchPosts()
	const tags = [...new Set(posts.map((post) => post.tags).flat())]
	return tags
}

export async function fetchAbout() {
	// const aboutModule =  import(`../content/about/index.md`)
}

// ref: https://github.com/cesarnml/sveltekit-blog-starter/blob/62bed7db2d872206b86cefa74d01ac7290ade301/src/lib/assets/js/fetchPosts.js#L9
