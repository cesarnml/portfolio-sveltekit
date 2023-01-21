import * as layoutModule from './layout'

describe('layout.ts', () => {
	test('should export prerender flag as truthy', () => {
		expect(layoutModule.prerender).toBeTruthy()
	})
})
