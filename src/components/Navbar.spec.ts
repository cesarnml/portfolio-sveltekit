import { render, screen } from '@testing-library/svelte'

import Navbar from './Navbar.svelte'

describe('NavBrand', () => {
	beforeEach(() => {
		render(Navbar)
	})

	test('should render a `nav` html element', async () => {
		const navElement = screen.getByRole('navigation')
		expect(navElement).toBeInTheDocument()
	})
})
