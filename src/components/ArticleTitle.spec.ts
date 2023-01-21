// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import ArticleTitle from './ArticleTitle.svelte'

test('href contains slug', () => {
	const title = 'Test title'
	const slug = 'test-slug'
	render(ArticleTitle, { title, slug })
	const titleLink = screen.getByRole('link', { name: title })
	expect(titleLink).toHaveAttribute('href', expect.stringContaining(slug))
})

test('href contains id', () => {
	const title = 'Test title'
	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-')

	render(ArticleTitle, { title })

	const titleLink = screen.getByRole('link', { name: title })
	expect(titleLink).toHaveAttribute('href', expect.stringContaining(`#${id}`))
})
