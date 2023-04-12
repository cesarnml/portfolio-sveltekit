import { render, screen } from '@testing-library/svelte'
import ArticleTitle from './ArticleTitle.svelte'

it('render a header link that contains post slug', async () => {
	const props = {
		title: 'Test title',
		slug: 'test-title',
	}

	render(ArticleTitle, { props })
	expect(screen.getByRole('heading', { name: RegExp(props.title, 'i') })).toBeInTheDocument()
	expect(screen.getByRole('link', { name: RegExp(props.title, 'i') })).toHaveAttribute(
		'href',
		`/blog/${props.slug}`,
	)
})
