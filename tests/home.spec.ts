import { Url } from '@lib/url'
import { test, expect } from '@playwright/test'

test('page should have "Hello world" button', async ({ page }) => {
	await page.goto(Url.Home)

	const target = page.getByText('Hello world')

	expect(target).toBeDefined()
})

test('page have a link that navigates to a blog post', async ({ page }) => {
	await page.goto(Url.Home)

	// Click the get started link.
	await page.getByRole('link', { name: 'First Svelte MDX post' }).click()

	// Expects the URL to contain intro.
	await expect(page).toHaveURL(/.*blog/)
})

test('page code can be copied', async ({ page }) => {
	const feedbackText = 'Copied 🎉'

	await page.goto(Url.BlogDetail('first'))

	await page.getByRole('button', { name: 'Svelte' }).click()

	const copiedButton = page.getByRole('button', { name: feedbackText })
	await expect(copiedButton).toHaveText(feedbackText)

	const clipboardText = await page.evaluate('navigator.clipboard.readText()')
	expect(await page.evaluate(() => document.querySelector('code')?.innerText)).toBe(clipboardText)
})
