import { createClient } from '@supabase/auth-helpers-sveltekit'
// eslint-disable-next-line import/extensions
import { env } from '$env/dynamic/public'

export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
