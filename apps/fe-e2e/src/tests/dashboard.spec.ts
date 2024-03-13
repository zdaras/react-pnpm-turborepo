import { DashboardPage } from '#/pages/dashboard/dashboardPage';
import { expect, test } from '#/utils/global-setup';

test.describe('Dashboard e2e', () => {
	let dashboardPage: DashboardPage;

	test.beforeEach(({ page }) => {
		dashboardPage = new DashboardPage(page);
		dashboardPage.open();
	});

	test('Modal is opening up', async () => {
		await expect(dashboardPage.openModalButton).toBeVisible();
		await dashboardPage.openModal();
		await expect(dashboardPage.page.getByTestId('dialog')).toBeVisible();
		await dashboardPage.closeModal();
		await expect(dashboardPage.page.getByTestId('dialog')).not.toBeVisible();
	});
});
