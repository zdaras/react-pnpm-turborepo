import type { Locator } from '@playwright/test';
import { Credentials } from '#/utils/creds';
import { BasePage } from '../basePage';

export class LoginPage extends BasePage {
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly loginButton: Locator;

	constructor(page: BasePage['page']) {
		super(page);
		this.usernameField = page.locator('input[name=username]');
		this.passwordField = page.locator('input[name=password]');
		this.loginButton = page.locator('button[type=submit]');
	}

	async open() {
		await super.openUrl('/login');
	}

	async login(username: string, password: string = Credentials.Password) {
		await super.enterText(this.usernameField, username);
		await super.enterText(this.passwordField, password);
		await super.click(this.loginButton);
	}
}
