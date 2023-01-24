import { render, screen } from '@testing-library/svelte'

import NavLinksContainer from './NavLinksContainer.svelte'

describe('NavLinksContainer', () => {
	beforeEach(() => {
		render(NavLinksContainer)
	})

	test('should render navlink-container', async () => {
		expect(screen.getByTestId('navlink-container')).toBeInTheDocument()
	})
})
