import { PrismaClient } from '@prisma/client'

/**
 * Prisma client - load from cache if defined
 */
export const prisma =
	globalThis.prisma ??
	new PrismaClient({
		log: ['query'],
	})

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

// ref: https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
