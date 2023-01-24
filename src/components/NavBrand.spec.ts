import { Url } from '@lib/url'
import { render, screen } from '@testing-library/svelte'

import NavBrand from './NavBrand.svelte'

describe('NavBrand', () => {
	beforeEach(() => {
		render(NavBrand)
	})

	test('should render a link to Home', async () => {
		const brandLink = screen.getByRole('link')
		expect(brandLink).toHaveAttribute('href', Url.Home)
	})
})
