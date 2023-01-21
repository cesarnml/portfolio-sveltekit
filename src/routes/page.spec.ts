import { render, screen } from '@testing-library/svelte'
import HomePage from './+page.svelte'

describe('HomePage', () => {
	const testPosts = [
		{
			slug: 'post-title-1',
			title: 'Post title 1',
			author: 'Author name 1',
			description: 'post description 1',
			date: '2023-12-01',
			published: true,
			tags: ['tag1', 'tag2']
		},
		{
			slug: 'post-title 2',
			title: 'Post title 2',
			author: 'Author name 2',
			description: 'post description 2',
			date: '2023-12-01',
			published: true,
			tags: ['tag1', 'tag2']
		}
	]
	beforeEach(() => {
		render(HomePage, { data: { posts: testPosts } })
	})
	test('should have a button', () => {
		expect(screen.getByRole('button', { name: 'Hello world!' })).toBeInTheDocument()
	})

	test('should have a link to blog post', () => {
		const blogLink1 = screen.getByRole('link', { name: testPosts[0].title })
		expect(blogLink1).toBeInTheDocument()
		expect(blogLink1).toHaveAttribute('href', `/posts/${testPosts[0].slug}`)
		expect(blogLink1).toHaveTextContent(testPosts[0].title)

		const blogLink2 = screen.getByRole('link', { name: testPosts[1].title })
		expect(blogLink2).toBeInTheDocument()
		expect(blogLink2).toHaveAttribute('href', `/posts/${testPosts[1].slug}`)
		expect(blogLink2).toHaveTextContent(testPosts[1].title)
	})
})
