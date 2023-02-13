import RSS from 'rss'
import type { RequestHandler } from './$types'
import { fetchPosts } from '$lib/content'

const MAX_AGE = 3600 // 1 hour (3600 secs)

export const GET: RequestHandler = async ({ setHeaders }) => {
	const feed = new RSS({
		title: "Cesar's RSS Feed",
		site_url: 'https://cesar-mejia.com',
		feed_url: 'https://cesar-mejia.com/api/rss.xml',
	})

	const posts = await fetchPosts()

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			url: `https://cesar-mejia.com/blog/${post.slug}`,
			date: post.date,
			description: post.description,
		})
	})

	setHeaders({
		'Content-Type': 'application/rss+xml',
		'Cache-Control': `max-age=0, s-maxage=${MAX_AGE}`,
	})

	return new Response(feed.xml({ indent: true }))
}
