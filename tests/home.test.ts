import { expect, test } from '@playwright/test'

test('homePage smoke test', async ({ page }) => {
	await page.goto('/')

	const logo = page.getByRole('link', { name: /logo/i })
	const home = page.getByRole('link', { name: /home/i })
	const blog = page.getByRole('link', { name: 'Blog', exact: true })
	const about = page.getByRole('link', { name: 'About', exact: true })
	const contact = page.getByRole('link', { name: /contact/i })

	// Home page has correct title
	await expect(page).toHaveTitle(/cesar's web portfolio/i)

	// Home page has a header
	const homePageHeading = page.getByRole('heading', { name: /cesar/i })
	expect(homePageHeading).toBeVisible()

	// Navigates to blog page when nav link is clicked
	await blog.click()
	await expect(page).toHaveURL(/blog/i)
	await expect(page).toHaveTitle(/cesar's blog posts/i)

	// Blog page has a header
	const blogHeading = page.getByRole('heading', { name: /all posts/i })
	await expect(blogHeading).toBeVisible()

	// Navigates to home page when logo is clicked
	await logo.click()
	expect(page).toHaveURL('')

	// Navigates to about page
	await about.click()
	await expect(page).toHaveURL(/about/i)
	await expect(page).toHaveTitle(/about cesar/i)

	// About page has a header
	const aboutHeading = page.getByRole('heading', { name: /about/i })
	await expect(aboutHeading).toBeVisible()

	// Navigates to contact page when nav link
	await contact.click()
	await expect(page).toHaveURL(/contact/i)
	await expect(page).toHaveTitle(/contact cesar/i)

	// Contact page has a header
	const contactHeading = page.getByRole('heading', { name: /contact me/i })
	await expect(contactHeading).toBeVisible()

	// Navigates to home page when nav link
	await home.click()
	await expect(page).toHaveURL('')
	await expect(page).toHaveTitle(/cesar's web portfolio/i)
})
