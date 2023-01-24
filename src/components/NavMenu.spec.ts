import { render, screen } from '@testing-library/svelte'

import NavMenu from './NavMenu.svelte'

describe('NavMenu', () => {
	beforeEach(() => {
		render(NavMenu)
	})

	// TODO: Improve tests (i.e. responsiveness?)
	test('should render open-sidebar-icon by default', async () => {
		expect(screen.getByAltText('open-sidebar-icon')).toBeInTheDocument()
	})
})
