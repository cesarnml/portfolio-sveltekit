/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Locals {
		supabase: SupabaseClient
		getSession(): Promise<Session | null>
	}
	interface PageData {
		session: Session | null
	}
	// interface Platform {}

	interface Error {
		errorId?: string
	}
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
