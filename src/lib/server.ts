import { setupServer } from 'msw/node'
import { rest } from 'msw'

type HandlerConfig = {
	path: string | RegExp
	res: (req: any, res: any, ctx: any) => Record<string, any> | string
}

export const createServer = (handlerConfig: HandlerConfig[]) => {
	const handlers = handlerConfig.map((config) =>
		// @ts-expect-error eslint // FIXME: fix TS
		rest[config.method ?? 'get'](config.path, (req: any, res: any, ctx: any) =>
			res(ctx.json(config.res(req, res, ctx))),
		),
	)

	const server = setupServer(...handlers)

	beforeAll(() => {
		server.listen()
	})

	afterEach(() => {
		server.resetHandlers()
	})

	afterAll(() => {
		server.close()
	})
}
