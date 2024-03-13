import type { Locator } from '@playwright/test';
import { BasePage } from '../basePage';

export class HomePage extends BasePage {
	public readonly dashboardLink: Locator;

	constructor(page: BasePage['page']) {
		super(page);
		this.dashboardLink = page.getByTestId('dashboard-link');
	}

	async open() {
		await super.openBaseUrl();
	}

	async goToDashboard() {
		await this.dashboardLink.click();
	}
}
