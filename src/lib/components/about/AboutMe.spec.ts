import { render, screen } from '@testing-library/svelte'
import AboutMe from './AboutMe.svelte'

it('renders an about me card', async () => {
	render(AboutMe)

	// It has a avatar image
	expect(await screen.findByRole('img', { name: /avatar/i })).toBeInTheDocument()

	// It has a header
	expect(await screen.findByRole('heading', { name: /hello, i'm cesar/i })).toBeInTheDocument()

	// It has a download resume button
	const resumeButton = await screen.findByRole('button', { name: /download resume/i })
	expect(resumeButton).toBeInTheDocument()

	// TODO: Figure out how to test resume download
})
