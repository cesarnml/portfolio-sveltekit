// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import RootLayout from './+layout.svelte'

describe('Root Layout', () => {
	test('should have nav links', () => {
		// @ts-expect-error Layout__SvelteComponent
		render(RootLayout)
		const homeLink = screen.getByRole('link', { name: 'Home' })
		const blogLink = screen.getByRole('link', { name: 'Blog' })

		expect(homeLink).toHaveAttribute('href', '/')
		expect(blogLink).toHaveAttribute('href', '/posts')
	})
})
