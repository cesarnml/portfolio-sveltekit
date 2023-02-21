import * as Sentry from '@sentry/node'
import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import '$lib/supabaseClient'
import '@sentry/tracing'

Sentry.init({
	dsn: PUBLIC_SENTRY_DSN,

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
})
