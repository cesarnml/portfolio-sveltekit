// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import ArticleMeta from './ArticleMeta.svelte'

describe('ArticleMeta', () => {
	const author = 'Test Author'
	const date = '2001/12/03'
	const formattedDate = new Date(date).toDateString()

	beforeEach(() => {
		render(ArticleMeta, { author, date })
	})

	test('has an author span', async () => {
		const authorSpan = screen.getByText(author)

		expect(authorSpan).toBeInTheDocument()
	})

	test('has a formatted date span', async () => {
		const dateSpan = screen.getByText(formattedDate)

		expect(dateSpan).toBeInTheDocument()
	})
})
