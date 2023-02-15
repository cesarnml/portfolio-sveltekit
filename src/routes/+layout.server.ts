import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (event) => ({
	session: await getServerSession(event),
})
