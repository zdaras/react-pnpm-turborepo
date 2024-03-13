import type { Locator } from '@playwright/test';
import { BasePage } from '../basePage';

export class DashboardPage extends BasePage {
	public readonly openModalButton: Locator;

	constructor(page: BasePage['page']) {
		super(page);
		this.openModalButton = page.locator('button[type=button]');
	}

	async open() {
		await super.openUrl('/dashboard');
	}

	async openModal() {
		await this.openModalButton.click();
	}
}
