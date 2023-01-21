// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import ArticleTitle from './ArticleTitle.svelte'

it('describes the ArticleTitle component', async () => {
	const title = 'Test title'

	it('with a slug passed', async () => {
		const slug = 'test-slug'
		render(ArticleTitle, { title, slug })

		const titleLink = screen.getByRole('link')
		test('href contains slug', async () => {
			expect(titleLink).toHaveAttribute('href', expect.stringContaining(slug))
		})
	})

	it('without a slug passed', async () => {
		render(ArticleTitle, { title })

		const titleLink = screen.getByRole('link')
		test('href contains id', async () => {
			const id = title
				.toLowerCase()
				.replace(/[^a-zA-Z ]/g, '')
				.replace(/\s/g, '-')
			expect(titleLink).toHaveAttribute('href', expect.stringContaining(id))
		})
	})
})
