import { prisma } from '$lib/prismaClient'

export const load = async () => {
	const views = await prisma.view.findMany()
	return { views }
}
