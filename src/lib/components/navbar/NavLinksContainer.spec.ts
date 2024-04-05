import { render, screen } from '@testing-library/svelte'
import NavLinksContainer from './NavLinksContainer.svelte'

it.skip('renders a NavLinksContainer', async () => {
	render(NavLinksContainer)
	expect(screen.getByTestId(/navlink-container/i)).toBeInTheDocument()
})
