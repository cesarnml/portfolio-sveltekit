import { expect, test } from '@playwright/test'

test('root page smoke test', async ({ page }) => {
	await page.goto('/')

	const home = page.getByRole('link', {
		name: /home/i,
	})
	const blog = page.getByRole('link', {
		name: /blog/i,
	})
	const about = page.getByRole('link', {
		name: /about/i,
	})
	const contact = page.getByRole('link', {
		name: /contact/i,
	})

	const homePageHeading = page.getByRole('heading', { name: /under construction/i })

	expect(homePageHeading).toBeVisible()

	await blog.click()

	const blogHeading = page.getByRole('heading', { name: /all posts/i })

	await expect(blogHeading).toBeVisible()

	await about.click()

	const aboutHeading = page.getByRole('heading', { name: /about/i })

	await expect(aboutHeading).toBeVisible()

	await contact.click()

	const contactHeading = page.getByRole('heading', { name: /contact me/i })

	await expect(contactHeading).toBeVisible()

	await home.click()

	await expect(page).toHaveTitle(/web portfolio/i)
})
