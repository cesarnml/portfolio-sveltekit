import type { View } from '@prisma/client'
import { render, screen } from '@testing-library/svelte'
import dayjs from 'dayjs'
import { Url } from '$lib/url'
import type { Post } from '$lib/typings'
import BlogPostCard from './BlogPostCard.svelte'

it('renders a blog post card (plural views)', async () => {
	const post = {
		slug: 'test-title',
		image: '/src/lib/assets/picture/construction.png',
		title: 'Test title',
		description: 'test description',
		date: '2023-01-17',
		readingTime: {
			text: '30 mins',
		},
	} as Post

	const view = {
		count: 2,
	} as View

	render(BlogPostCard, { props: { post, view } })

	// It render a link to the blog post
	expect(screen.getByRole('link', { name: RegExp(post.title, 'i') })).toHaveAttribute(
		'href',
		Url.BlogDetail(post.slug),
	)
	// It displays a blog post cover image
	expect(screen.getByRole('img', { name: /blog post/i })).toBeInTheDocument()

	// It displays the blog title as a header
	expect(screen.getByRole('heading', { name: RegExp(post.title, 'i') })).toBeInTheDocument()

	// It displays the blog post description
	expect(screen.getByText(RegExp(post.description, 'i'))).toBeInTheDocument()

	// TODO: Brittle input transformation
	// It displays the blog post date
	expect(screen.getByText(dayjs(post.date).format('D MMM YYYY'))).toBeInTheDocument()

	// It displays the blog post reading time
	expect(screen.getByText(post.readingTime.text)).toBeInTheDocument()

	// It displays the blog views
	expect(screen.getByText(`${view.count} views`)).toBeInTheDocument()
})

it('renders a blog post card (singular view)', async () => {
	const post = {
		slug: 'test-title',
		image: '/src/lib/assets/picture/construction.png',
		title: 'Test title',
		description: 'test description',
		date: '2023-01-17',
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
