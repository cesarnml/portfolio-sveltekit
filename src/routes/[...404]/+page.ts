import type { Config } from '@sveltejs/adapter-vercel'

export const config: Config = {
	isr: {
		expiration: false, // never expire
	},
}
