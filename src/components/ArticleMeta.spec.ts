// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import ArticleMeta from './ArticleMeta.svelte'

it('describes the ArticleMeta component', async () => {
	const author = 'Test Author'
	const date = '2001/12/03'
	const formattedDate = new Date(date).toDateString()

	render(ArticleMeta, { author, date })

	const authorSpan = screen.getByText(author)
	const dateSpan = screen.getByText(formattedDate)

	test('shows an author span', async () => {
		expect(authorSpan).dateSpan()
	})

	test('shows a formatted date span', async () => {
		expect(dateSpan).toBeInTheDocument()
	})
})
