import { render, screen } from '@testing-library/svelte'

import NavMenu from './NavMenu.svelte'

describe('NavMenu', () => {
	beforeEach(() => {
		render(NavMenu)
	})

	test('should render open-sidebar-icon by default', async () => {
		expect(screen.getByAltText('open-sidebar-icon')).toBeInTheDocument()
	})
})
