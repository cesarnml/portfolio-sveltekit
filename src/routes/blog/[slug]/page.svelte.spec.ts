import { render, screen } from '@testing-library/svelte'
import BlogPostPage from './+page.svelte'

const data = {
	html: '<div>Hello world!</div>',
	frontmatter: {
		slug: 'post-title',
		title: 'Post title',
		author: 'Author name',
		description: 'post description',
		date: '2023-12-01',
		published: true,
		tags: ['tag1', 'tag2'],
		readingTime: '2 min read'
	}
}

describe('BlogPostPage', () => {
	beforeEach(() => {
		render(BlogPostPage, { data })
	})

	test('should contain reading time', () => {
		const readingTimeDiv = screen.getByText(data.frontmatter.readingTime)
		expect(readingTimeDiv).toBeInTheDocument()
	})

	test('should render raw `html`', () => {
		const rawHtmlWrapper = screen.getByTestId('raw-html-wrapper')
		expect(rawHtmlWrapper).toContainHTML(data.html)
	})
})
