import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		timeout: 120 * 1000,
	},
	testDir: 'e2e',
	reporter: [['html', { open: 'never' }]],
}

export default config
