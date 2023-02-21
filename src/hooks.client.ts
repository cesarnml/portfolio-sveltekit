import type { HandleClientError } from '@sveltejs/kit'
import * as SentrySvelte from '@sentry/svelte'
import { BrowserTracing } from '@sentry/tracing'
import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import '$lib/supabaseClient'

SentrySvelte.init({
	dsn: PUBLIC_SENTRY_DSN,
	integrations: [
		new BrowserTracing(),
		new SentrySvelte.Replay({
			maskAllInputs: false,
			maskAllText: false,
			blockAllMedia: false,
		}),
	],
	tracesSampleRate: 1.0,
	replaysSessionSampleRate: 1.0,
	replaysOnErrorSampleRate: 1.0,
})

export const handleError: HandleClientError = ({ error, event }) => {
	const errorId = crypto.randomUUID()
	SentrySvelte.captureException(error, {
		contexts: { sveltekit: { event, errorId } },
	})
	return {
		message: "An unexpected error occurred. We're working on it!",
		errorId,
	}
}
