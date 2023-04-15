import { json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json()
	console.log('payload:', payload)

	return json({ message: 'ok' })
}

export const GET: RequestHandler = async ({ request }) => {
	const payload = await request.json()
	console.log('payload:', payload)
	return json({ message: 'ok' })
}
