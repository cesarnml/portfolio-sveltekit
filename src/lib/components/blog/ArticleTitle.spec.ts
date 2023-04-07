import { render, screen } from '@testing-library/svelte'
import ArticleTitle from './ArticleTitle.svelte'

it('render a header link that contains post slug if `slug` prop passed', async () => {
	const props = {
		title: 'Test title',
		slug: 'test-title',
	}

	render(ArticleTitle, { props })
})

it('render a header link that contains internal id if `slug` prop omitted', async () => {
	// FIXME: brittle data transformation
	const getInternalId = (title: string) =>
		title
			.toLowerCase()
			.replace(/[^a-zA-Z ]/g, '')
			.replace(/\s/g, '-')

	const props = {
		title: 'Test title',
	}

	render(ArticleTitle, { props })

	// It display the article title as a header link
	expect(screen.getByRole('heading', { name: RegExp(props.title, 'i') })).toBeInTheDocument()
	expect(screen.getByRole('link', { name: RegExp(props.title, 'i') })).toHaveAttribute(
		'href',
		`#${getInternalId(props.title)}`,
	)
	screen.debug()
})
