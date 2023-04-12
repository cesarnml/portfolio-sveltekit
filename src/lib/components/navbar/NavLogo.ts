import { render, screen } from '@testing-library/svelte'
import NavLogo from './NavLogo.svelte'

it('renders site logo link', async () => {
	// Render the component
	render(NavLogo)

	// Expect the logo link to be visible
	const navLogo = screen.getByRole('link', { name: /logo/i })
	expect(navLogo).toBeVisible()
})
