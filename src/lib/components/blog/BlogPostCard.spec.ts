import type { View } from '@prisma/client'
import { render, screen } from '@testing-library/svelte'
import { Url } from '$lib/url'
import BlogPostCard from './BlogPostCard.svelte'
import type { Post } from '$lib/typings/blog'

it('renders a blog post card (plural views)', async () => {
	const post = {
		slug: 'test-title',
		image: '/src/lib/assets/picture/cesar.png',
		title: 'Test title',
		description: 'test description',
		date: '2023-01-17',
		tags: ['tag1', 'tag2'],
		readingTime: {
			text: '30 mins',
		},
	} as Post

	const view = {
		count: 2,
	} as View

	render(BlogPostCard, { props: { post, view } })

	// It render a links to the blog post
	const blogLinks = screen.getAllByRole('link', { name: RegExp(post.title, 'i') })

	blogLinks.forEach((link) => {
		expect(link).toHaveAttribute('href', Url.BlogDetail(post.slug))
	})
	// It displays a blog post cover image
	expect(screen.getByRole('img', { name: /post/i })).toBeInTheDocument()

	// It displays the blog title as a header
	expect(screen.getByRole('heading', { name: RegExp(post.title, 'i') })).toBeInTheDocument()

	// It displays the blog post description
	expect(screen.getByText(RegExp(post.description, 'i'))).toBeInTheDocument()

	// It displays the blog views
	expect(screen.getByText(`${view.count} views`)).toBeInTheDocument()
})

it('renders a blog post card (singular view)', async () => {
	const post = {
		slug: 'test-title',
		image: '/src/lib/assets/picture/cesar.png',
		title: 'Test title',
		description: 'test description',
		date: '2023-01-17',
		tags: ['tag1', 'tag2'],
		readingTime: {
			text: '30 mins',
		},
	} as Post

	const view = {
		count: 1,
	} as View

	render(BlogPostCard, { props: { post, view } })

	// It displays the blog views (singular)
	expect(screen.getByText(`${view.count} view`)).toBeInTheDocument()
})
