import { render, screen } from '@testing-library/svelte'
import NavBrand from './NavBrand.svelte'

it('renders site brand link', async () => {
	// Render the component
	render(NavBrand)

	// Expect the brand link to be visible
	const navBrand = screen.getByRole('link', { name: /brand/i })
	expect(navBrand).toBeVisible()
})
