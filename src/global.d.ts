import { PrismaClient } from '@prisma/client'

declare global {
	// eslint-disable-next-line vars-on-top, no-var
	var prisma: PrismaClient
}

export {}

// ref: https://stackoverflow.com/questions/38906359/create-a-global-variable-in-typescript
