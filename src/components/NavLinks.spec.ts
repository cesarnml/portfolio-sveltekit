import { Url } from '@lib/url'
import { render, screen } from '@testing-library/svelte'

import NavLinks from './NavLinks.svelte'

describe('NavLinks', () => {
	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter((url) => !excludedUrls.includes(url)) as (keyof typeof Url)[]

	beforeEach(() => {
		render(NavLinks)
	})

	test('should not render excluded url links', async () => {
		excludedUrls.forEach((link) => {
			expect(screen.queryByRole('link', { name: link })).not.toBeInTheDocument()
		})
	})

	test('should render a link for each navLinks', async () => {
		navLinks.forEach((link) => {
			expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
		})
	})
})
