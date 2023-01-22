import { render, screen } from '@testing-library/svelte'
import BlogPage from './+page.svelte'

describe('BlogPage', () => {
	test('should render a placeholder div', () => {
		render(BlogPage)
		expect(screen.getByText(/all blog page/i)).toBeInTheDocument()
	})
})
