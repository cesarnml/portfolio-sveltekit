import type { Handle, HandleServerError } from '@sveltejs/kit'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { handleErrorWithSentry } from '@sentry/sveltekit'
import * as Sentry from '@sentry/sveltekit'
import {
	PUBLIC_SENTRY_DSN,
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event,
	})

	/**
	 * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
	 */
	event.locals.getSession = async () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const {
			data: { session },
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		} = await event.locals.supabase.auth.getSession()
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return session
	}

	return resolve(event, {
		/**
		 * There´s an issue with `filterSerializedResponseHeaders` not working when using `sequence`
		 *
		 * https://github.com/sveltejs/kit/issues/8061
		 */
		filterSerializedResponseHeaders(name) {
			return name === 'content-range'
		},
	})
}

if (import.meta.env.PROD) {
	Sentry.init({
		dsn: PUBLIC_SENTRY_DSN,
		tracesSampleRate: 1.0,
	})
}

export const handleError: HandleServerError = async (input) => {
	if (import.meta.env.PROD) {
		await handleErrorWithSentry()
	}
	if (import.meta.env.DEV) {
		console.error(input.error)
	}

	return {
		message: 'A client error has occurred. I have spoken.',
	}
}
