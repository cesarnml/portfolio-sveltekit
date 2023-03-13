import { render, screen } from '@testing-library/svelte'
import Footer from './Footer.svelte'

test('it renders a footer', async () => {
	render(Footer)

	const footer = screen.getByRole('contentinfo')
	screen.debug()
	expect(footer).toBeInTheDocument()
})
