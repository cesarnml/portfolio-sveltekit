export type ReadingTime = {
	text: string
	minutes: number
	time: number
	words: number
}

export type Post = {
	title: string
	author: string
	description: string
	date: string
	published: boolean
	tags: string[]
	readingTime: ReadingTime
	image: string
	html: string
	slug: string
}
