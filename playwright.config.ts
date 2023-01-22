import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	use: {
		baseURL: 'http://localhost:4173',
		permissions: ['clipboard-read', 'clipboard-write']
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	reporter: [['html', { open: 'never' }]]
}

export default config
