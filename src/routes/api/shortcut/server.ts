import { json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
	const payload = request.json()
	console.log('payload:', payload)

	return json({ message: 'ok' })
}
