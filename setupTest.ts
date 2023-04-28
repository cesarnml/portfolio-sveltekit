// setupTests.ts
/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'
import { within } from '@testing-library/svelte'
import { vi, expect } from 'vitest'
import type { Navigation, Page } from '@sveltejs/kit'
import { readable } from 'svelte/store'
import type * as environment from '$app/environment'
import type * as navigation from '$app/navigation'
import type * as stores from '$app/stores'

function toContainRole(container: HTMLElement, role: string, quantity = 1) {
	const elements = within(container).queryAllByRole(role)
	if (elements.length === quantity) {
		return {
			pass: true,
		}
	}

	return {
		pass: false,
		message: () =>
			`Expected to find ${quantity} ${role} elements. Found ${elements.length} instead`,
	}
}

// @ts-expect-error test
expect.extend({ toContainRole })
// Mock SvelteKit runtime module $app/environment
vi.mock('$app/environment', (): typeof environment => ({
	browser: true,
	dev: true,
	building: false,
	version: 'any',
}))

// Mock SvelteKit runtime module $app/navigation
vi.mock('$app/navigation', (): typeof navigation => ({
	afterNavigate: () => {},
	beforeNavigate: () => {},
	disableScrollHandling: () => {},
	goto: () => Promise.resolve(),
	invalidate: () => Promise.resolve(),
	invalidateAll: () => Promise.resolve(),
	preloadData: () => Promise.resolve(),
	preloadCode: () => Promise.resolve(),
}))

// Mock SvelteKit runtime module $app/stores
vi.mock('$app/stores', (): typeof stores => {
	const getStores: typeof stores.getStores = () => {
		const navigating = readable<Navigation | null>(null)
		const page = readable<Page>({
			url: new URL('http://localhost/test'),
			params: {},
			route: {
				id: null,
			},
			status: 200,
			error: null,
			data: {
				session: null,
			},
			form: undefined,
		})
		const updated = { subscribe: readable(false).subscribe, check: () => Promise.resolve(false) }

		return { navigating, page, updated }
	}

	const page: typeof stores.page = {
		subscribe(fn) {
			return getStores().page.subscribe(fn)
		},
	}
	const navigating: typeof stores.navigating = {
		subscribe(fn) {
			return getStores().navigating.subscribe(fn)
		},
	}
	const updated: typeof stores.updated = {
		subscribe(fn) {
			return getStores().updated.subscribe(fn)
		},
		check: () => Promise.resolve(false),
	}

	return {
		getStores,
		navigating,
		page,
		updated,
	}
})
