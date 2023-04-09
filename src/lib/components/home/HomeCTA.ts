import { render, screen } from '@testing-library/svelte'
import HomeCTA from './HomeCTA.svelte'
import { Url } from '$lib/url'

it('renders HomeCTA', async () => {
	render(HomeCTA)

	expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument()
	expect(screen.getByRole('heading', { name: /cesar/i, level: 1 })).toBeInTheDocument()

	const blogLink = screen.getByRole('link', { name: /blog/i })
	const aboutLink = screen.getByRole('link', { name: /about/i })

	expect(blogLink).toHaveAttribute('href', Url.Blog)
	expect(aboutLink).toHaveAttribute('href', Url.About)
})
