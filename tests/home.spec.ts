import { test, expect } from '@playwright/test'

test('page should have "Hello world" button', async ({ page }) => {
	await page.goto('http://localhost:4173/')
	const target = page.getByText('Hello world')
	await expect(target).toBeDefined()
})

test('page have a link that navigates to a blog post', async ({ page }) => {
	await page.goto('http://localhost:4173/')

	// Click the get started link.
	await page.getByRole('link', { name: 'First Svelte MDX post' }).click()

	// Expects the URL to contain intro.
	await expect(page).toHaveURL(/.*blog/)
})
