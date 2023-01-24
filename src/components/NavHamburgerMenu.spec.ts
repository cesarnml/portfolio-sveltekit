import { render, screen, fireEvent } from '@testing-library/svelte'
import NavHamburgerMenu from './NavHamburgerMenu.svelte'

describe('NavBrand', () => {
	beforeEach(() => {
		render(NavHamburgerMenu)
	})

	test('should show open-sidebar-icon by default', async () => {
		const icon = screen.getByAltText('open-sidebar-icon')
		expect(icon).toBeInTheDocument()
	})

	test('should toggle sidebar-icons when button is clicked', async () => {
		const button = screen.getByRole('button')

		expect(screen.queryByAltText('close-sidebar-icon')).toBeNull()
		await fireEvent.click(button)
		expect(screen.getByAltText('close-sidebar-icon')).toBeInTheDocument()

		expect(screen.queryByAltText('open-sidebar-icon')).toBeNull()
		await fireEvent.click(button)
		expect(screen.getByAltText('open-sidebar-icon')).toBeInTheDocument()
	})
})
