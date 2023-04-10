import type { HandleClientError } from '@sveltejs/kit'
import * as Sentry from '@sentry/svelte'
// import { BrowserTracing } from '@sentry/tracing'
import { PUBLIC_SENTRY_DSN } from '$env/static/public'

Sentry.init({
	dsn: PUBLIC_SENTRY_DSN,
	integrations: [
		new Sentry.BrowserTracing(),
		new Sentry.Replay({
			maskAllInputs: false,
			maskAllText: false,
			blockAllMedia: false,
			errorSampleRate: 1.0,
			sessionSampleRate: 1.0,
		}),
	],
	tracesSampleRate: 1.0,
})

export const handleError: HandleClientError = ({ error, event }) => {
	const errorId = crypto.randomUUID()

	// Only emit errors in production
	if (import.meta.env.PROD) {
		Sentry.captureException(error, {
			contexts: { sveltekit: { event, errorId } },
		})
	}

	return {
		message: "An unexpected error occurred. We're working on it!",
		errorId,
	}
}
