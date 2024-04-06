import RSS from 'rss'
import { fetchPosts } from '$lib/content'

const MAX_AGE = 3600 // 1 hour (3600 secs)

export const GET = async ({ setHeaders }) => {
	const feed = new RSS({
		title: "Cesar's RSS Feed",
		site_url: 'https://cesarmejia.com',
		feed_url: 'https://cesarmejia.com/rss.xml',
	})

	const posts = await fetchPosts()

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			url: `https://cesarmejia.com/blog/${post.slug}`,
			date: post.date,
			description: post.description,
		})
	})

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	setHeaders({
		'Content-Type': 'application/rss+xml',
		'Cache-Control': `max-age=0, s-maxage=${MAX_AGE}`,
	})

	return new Response(feed.xml({ indent: true }))
}
