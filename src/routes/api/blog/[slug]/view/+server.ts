import { json, error } from '@sveltejs/kit'
import { prisma } from '$lib/prismaClient'

export const POST = async ({ params }) => {
	try {
		await prisma.view.upsert({
			where: {
				slug: params.slug,
			},
			update: {
				count: {
					increment: 1,
				},
			},
			create: {
				slug: params.slug,
				count: 1,
			},
		})
	} catch (err) {
		error(400, 'Bad request')
	}
	return json({ message: 'ok' })
}
