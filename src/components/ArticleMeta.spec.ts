// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

import ArticleMeta from './ArticleMeta.svelte'

const author = 'Test Author'
const date = '2001/12/03'
const formattedDate = new Date(date).toDateString()

test('shows an author span', async () => {
	render(ArticleMeta, { author, date })

	const authorSpan = screen.getByText(author)

	expect(authorSpan).toBeInTheDocument()
})

test('shows a formatted date span', async () => {
	render(ArticleMeta, { author, date })

	const dateSpan = screen.getByText(formattedDate)

	expect(dateSpan).toBeInTheDocument()
})
