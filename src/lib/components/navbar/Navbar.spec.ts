import { render, screen } from '@testing-library/svelte'
import Navbar from './Navbar.svelte'
import '../../../mocks/matchMedia'

it('renders a navbar', async () => {
	render(Navbar)

	expect(screen.getByRole('toolbar')).toBeInTheDocument()
})
