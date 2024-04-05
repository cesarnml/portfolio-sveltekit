import { vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import NavHamburgerMenu from './NavHamburgerMenu.svelte'

it.skip('renders a NavHamburgerMenu', async () => {
	vi.mock('@skeletonlabs/skeleton', async (importOriginal) => ({
		...(await importOriginal<typeof import('@skeletonlabs/skeleton')>()),
		getDrawerStore: () => ({ subscribe: () => vi.fn(), open: vi.fn, close: vi.fn }),
	}))
	// FIXME: iconify needs better a11y support
	render(NavHamburgerMenu)

	expect(screen.getByRole('button', { name: /nav menu/i })).toBeVisible()
})
