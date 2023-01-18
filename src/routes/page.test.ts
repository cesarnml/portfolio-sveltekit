import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'

describe('Test Page.svelte', async () => {
	it('Expect "Hello world!" to exist', async () => {
		render(Page)
		await screen.getByText('Hello world!')
		expect(screen.getByText('Hello world!')).toBeVisible()
	})
})
