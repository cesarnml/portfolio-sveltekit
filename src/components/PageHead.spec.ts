// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'

import PageHead from './PageHead.svelte'

describe('PageHead with defined title', () => {
	const title = 'Blog title'
	const description = 'Blog description'
	const siteTitle = 'SvelteKit + MDsveX Blog'
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle

	beforeEach(() => {
		render(PageHead, { title, description }, { container: document.head })
	})
	test('to have a title', () => {
		expect(document.querySelector('title')).toHaveTextContent(formattedTitle)
	})
	test('to have a meta description', () => {
		expect(getMetaByName('description')).toHaveAttribute('content', expect.stringContaining(description))
	})

	test('to have a meta og:site_name', () => {
		expect(getMetaByProperty('og:site_name')).toHaveAttribute('content', expect.stringContaining(siteTitle))
	})

	test('to have a meta og:title', () => {
		expect(getMetaByProperty('og:title')).toHaveAttribute('content', expect.stringContaining(title))
	})

	test('to have a meta og:description', () => {
		expect(getMetaByProperty('og:description')).toHaveAttribute('content', expect.stringContaining(description))
	})

	test('to have a meta httpequiv', () => {
		expect(getMetaByHttpEquiv('Content-Security-Policy')).toHaveAttribute(
			'content',
			expect.stringContaining("script-src 'self'")
		)
	})
})

describe('PageHead with empty string title', () => {
	const title = ''
	const description = 'Blog description'
	const siteTitle = 'SvelteKit + MDsveX Blog'
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle

	beforeEach(() => {
		render(PageHead, { title, description }, { container: document.head })
	})
	test('to have a title', () => {
		expect(document.querySelector('title')).toHaveTextContent(formattedTitle)
	})
	test('to have a meta description', () => {
		expect(getMetaByName('description')).toHaveAttribute('content', expect.stringContaining(description))
	})

	test('to have a meta og:site_name', () => {
		expect(getMetaByProperty('og:site_name')).toHaveAttribute('content', expect.stringContaining(siteTitle))
	})

	test('to have a meta og:title', () => {
		expect(getMetaByProperty('og:title')).toHaveAttribute('content', expect.stringContaining(formattedTitle))
	})

	test('to have a meta og:description', () => {
		expect(getMetaByProperty('og:description')).toHaveAttribute('content', expect.stringContaining(description))
	})

	test('to have a meta httpequiv', () => {
		expect(getMetaByHttpEquiv('Content-Security-Policy')).toHaveAttribute(
			'content',
			expect.stringContaining("script-src 'self'")
		)
	})
})

function getMetaByName(metaName: string) {
	const metas = document.getElementsByTagName('meta')
	for (const element of metas) {
		if (element.getAttribute('name') === metaName) {
			return element
		}
	}
	return null
}

function getMetaByProperty(metaProperty: string) {
	const metas = document.getElementsByTagName('meta')
	for (const element of metas) {
		if (element.getAttribute('property') === metaProperty) {
			return element
		}
	}
	return null
}

function getMetaByHttpEquiv(httpEquiv: string) {
	const metas = document.getElementsByTagName('meta')
	for (const element of metas) {
		if (element.getAttribute('httpequiv') === httpEquiv) {
			return element
		}
	}
	return null
}
