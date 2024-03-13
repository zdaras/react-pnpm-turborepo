import { defineConfig } from '@playwright/test';
import { viewports, desktopProjects, mobileProjects, env, webServerCommand } from './src/utils/config';

export default defineConfig({
	name: 'E2E tests',
	testMatch: '**/*.spec.ts',
	testDir: './src/tests',
	outputDir: './static/test-results',
	globalSetup: './src/utils/global-setup.ts',
	grep: env.PLAYWRIGHT_TAG,
	timeout: 60 * 1000,
	expect: { timeout: 5 * 1000 },
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? 'dot' : [['list'], ['html', { open: 'never', outputFolder: './static/reports' }]],
	use: {
		baseURL: env.BASE_URL,
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		ignoreHTTPSErrors: true,
		viewport: viewports.desktop,
		storageState: './static/storage-state/storageState.json'
	},
	projects: [...desktopProjects, ...mobileProjects],
	...(process.env.CI && {
		webServer: {
			command: webServerCommand,
			ignoreHTTPSErrors: true,
			reuseExistingServer: !process.env.CI
		}
	})
});
