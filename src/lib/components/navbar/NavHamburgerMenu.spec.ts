import { render, screen } from '@testing-library/svelte'
import NavHamburgerMenu from './NavHamburgerMenu.svelte'

it('renders a NavHamburgerMenu', async () => {
	// FIXME: iconify needs better a11y support
	render(NavHamburgerMenu)

	expect(screen.getByRole('button', { name: /nav menu/i })).toBeVisible()
})
