import type { Locator, Page } from '@playwright/test';

export class BasePage {
	public page: Page;

	/**
	 * @param {Page} page
	 */
	constructor(page: Page) {
		this.page = page;
	}

	async openUrl(path: string) {
		await this.page.goto(path, { waitUntil: 'load' });
	}

	async openBaseUrl() {
		await this.openUrl('/');
	}

	async getElement(...args: Parameters<Page['locator']>) {
		return this.page.locator(...args);
	}

	async getElementsArray(...args: Parameters<Page['locator']>) {
		return this.page.locator(...args).all();
	}

	async getSelectOptionByValue(locator: Locator, value: string) {
		return locator.selectOption({ value: value });
	}

	async getElementByText(text: string) {
		return this.page.getByText(text, { exact: true });
	}

	async getElementText(locator: Locator) {
		return locator.textContent();
	}

	async click(locator: Locator) {
		await locator.click();
	}

	async enterText(locator: Locator, text: string) {
		await locator.fill(text);
	}

	async pause(miliseconds: number) {
		await this.page.waitForTimeout(miliseconds);
	}

	async waitForLocator(locator: Locator) {
		await locator.waitFor({ state: 'visible' });
	}

	async acceptCookies() {
		if (await this.page.locator('#accept-cookies').isVisible()) await this.page.locator('#accept-cookies').click();
	}

	async closeModal() {
		if (await this.page.getByTestId('close-icon').isVisible()) await this.page.getByTestId('close-icon').click();
	}
}
