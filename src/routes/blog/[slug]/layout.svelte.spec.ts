import { render, screen } from '@testing-library/svelte'
import BlogPostLayout from './+layout.svelte'

describe('BlogPostLayout', () => {
	test('should contain a layout div', () => {
		render(BlogPostLayout)

		const layoutDiv = screen.getByTestId('blog-layout-div')

		expect(layoutDiv).toBeInTheDocument()
	})
})
