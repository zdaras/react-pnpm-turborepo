import { HomePage } from '#/pages/home/homePage';
import { expect, test } from '#/utils/global-setup';

test.describe('Home e2e', () => {
	let homePage: HomePage;

	test.beforeEach(({ page }) => {
		homePage = new HomePage(page);
		homePage.open();
	});

	test('dashboard link is visible', async () => {
		await expect(homePage.dashboardLink).toBeVisible();
	});
});
