import type { HandleServerError } from '@sveltejs/kit'
import * as SentryNode from '@sentry/node'
import crypto from 'crypto'
import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import '$lib/supabaseClient'
import '@sentry/tracing'

SentryNode.init({
	dsn: PUBLIC_SENTRY_DSN,
	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
})

export const handleError: HandleServerError = ({ error, event }) => {
	const errorId = crypto.randomUUID()
	SentryNode.captureException(error, {
		contexts: { sveltekit: { event, errorId } },
	})
	return {
		message: "An unexpected error occurred. We're working on it.",
		errorId,
	}
}
