import { slugFromPath } from './slugFromPath'

describe('slugFromPath', () => {
	const goodPath = '/posts/example/second-post-is-cool.svelte.md'
	const badPath = '/post/+page.svelte'
	const expectedGoodSlug = 'second-post-is-cool'
	const expectedBadSlug = null

	test('should convert path to slug', () => {
		const returnedSlug = slugFromPath(goodPath)
		expect(returnedSlug).toEqual(expectedGoodSlug)
	})
	test('should return `null` if no match found', () => {
		const returnedSlug = slugFromPath(badPath)
		expect(returnedSlug).toEqual(expectedBadSlug)
	})
})
