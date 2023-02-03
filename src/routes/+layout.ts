import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'

export const prerender = true

export const load: LayoutLoad = async ({ url }) => {
	try {
		return {
			pathname: url.pathname,
		}
	} catch (err) {
		if (err instanceof Error) {
			throw error(500, err)
		}
	}
}
