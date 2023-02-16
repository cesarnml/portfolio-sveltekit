import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { error, type LoadEvent } from '@sveltejs/kit'

export const load = async (event: LoadEvent) => {
	try {
		const { session } = await getSupabase(event)
		return {
			session,
		}
	} catch (err) {
		if (err instanceof Error) {
			throw error(500, err)
		}
	}
}
