import { render, screen } from '@testing-library/svelte'
import NavMenu from './NavMenu.svelte'
import '../../../mocks/matchMedia'

// TODO: Make test better
it.skip('renders a NavMenu button', async () => {
	render(NavMenu)

	expect(screen.getByRole('button', { name: /nav menu/i })).toBeVisible()
})
