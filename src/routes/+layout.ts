import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { error } from '@sveltejs/kit'
import type { LayoutLoad } from './$types'

// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = true

// Allows client side routing. Necessary for page transitions and link prefetching; change to false if you prefer ordinary routing without JS
export const csr = true

export const load: LayoutLoad = async (event) => {
	try {
		const { session } = await getSupabase(event)
		return {
			pathname: event.url.pathname,
			session,
		}
	} catch (err) {
		if (err instanceof Error) {
			throw error(500, err)
		}
	}
}
