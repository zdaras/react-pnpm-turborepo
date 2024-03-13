import { FullConfig, chromium, expect, test } from '@playwright/test';

export default async function globalSetup(config: FullConfig) {
	const { storageState, headless } = config.projects[0].use;
	const browser = await chromium.launch({ headless });
	const page = await browser.newPage();
	// login function
	await page.context().storageState({ path: String(storageState) });
	await browser.close();
}

export { test, expect };
