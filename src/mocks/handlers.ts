// src/mocks/handlers.ts
import { rest } from 'msw'

// Define handlers that catch the corresponding requests and return the mock data.
export const handlers = [
	rest.post('https://smtpjs.com/v3/smtpjs.aspx', (req, res, ctx) =>
		res(ctx.status(200), ctx.text('OK')),
	),
]
