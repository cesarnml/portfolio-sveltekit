import { render, screen } from '@testing-library/svelte'
import Footer from './footer/Footer.svelte'

it('renders a footer element', async () => {
	render(Footer)

	const footer = screen.getByRole('contentinfo')
	expect(footer).toBeInTheDocument()
})
