import { render, screen } from '@testing-library/svelte'
import { github, linkedIn, stackoverflow, twitter, devTo, rss } from '$lib/config'
import SocialBar from './SocialBar.svelte'

it('renders social links', async () => {
	const socialUrls = [github, linkedIn, stackoverflow, twitter, devTo, rss]

	render(SocialBar)

	socialUrls.forEach((url) => expect(screen.getByRole('link', { name: RegExp(url) })))
})
