import { render, screen } from '@testing-library/svelte'
import ReusableLink from './ReusableLink.svelte'

it('renders a default href and label when no props passed', async () => {
	render(ReusableLink)

	expect(screen.getByRole('link', { name: /no label/i })).toHaveAttribute('href', '/')
})

it('renders a passed href and label when props passed', async () => {
	const props = {
		href: '/blog',
		label: 'Blog',
	}

	render(ReusableLink, props)

	expect(screen.getByRole('link', { name: RegExp(props.label, 'i') })).toHaveAttribute(
		'href',
		props.href,
	)
})
