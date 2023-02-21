/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Error {
		errorId?: string
	}
	// interface Locals {}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null
	}
	// interface Platform {}
	interface Supabase {
		Database: import('./DatabaseDefinitions').Database
		SchemaName: 'public'
	}

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
		image: string
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
