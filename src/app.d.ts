// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexModule {
		default: import('svelte/internal').SvelteComponent & { render: () => { html: string } }
		metadata: Metadata
	}

	interface Metadata {
		title: string
		author: string
		description: string
		date: string
		published: boolean
		tags: string[]
		readingTime: ReadingTime
	}

	interface ReadingTime {
		text: string
		minutes: number
		time: number
		words: number
	}

	interface BlogPost extends Metadata {
		html: string
		slug: string
	}
}

type SendParams = {
	SecureToken: string
	To: string
	From: string
	Subject: string
	Body: string
}
declare namespace Email {
	export const send: (params: SendParams) => Promise<string>
}
