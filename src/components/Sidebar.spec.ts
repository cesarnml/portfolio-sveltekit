import { render, screen } from '@testing-library/svelte'

import Sidebar from './Sidebar.svelte'

describe('Sidebar', () => {
	beforeEach(() => {
		render(Sidebar)
	})

	test('should render navlink-container', async () => {
		expect(screen.getByTestId('navlink-container')).toBeInTheDocument()
	})
})
