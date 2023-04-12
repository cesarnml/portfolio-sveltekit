import { render, screen } from '@testing-library/svelte'
import NavLinks from './NavLinks.svelte'
import { Url } from '$lib/url'

it('renders Navlinks', async () => {
	// FIXME: Brittle test. Fix it.
	const navLinkKeys = Object.keys(Url).filter((key) => key !== 'BlogDetail')

	render(NavLinks)

	navLinkKeys.forEach((key) => {
		expect(screen.getByRole('link', { name: RegExp(key, 'i') })).toHaveAttribute(
			'href',
			Url[key as keyof typeof Url],
		)
	})
})
