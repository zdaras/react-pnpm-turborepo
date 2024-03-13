import { devices } from '@playwright/test';
import dotenv from 'dotenv';

export const NODE_ENV = (process.env.NODE_ENV || 'development') as 'development' | 'production';

dotenv.config({ path: `${process.cwd()}/.env.${NODE_ENV}` });

export const env = {
	NODE_ENV,
	IS_DEV: NODE_ENV === 'development',
	IS_PROD: NODE_ENV === 'production',
	PLAYWRIGHT_TAG: new RegExp(process.env.PLAYWRIGHT_TAG || ''),
	BASE_URL: process.env.PLAYWRIGHT_BASE_URL || process.env.BASE_URL
};

const webServerCommandList = {
	development: 'pnpm --workspace-root start',
	production: 'pnpm --workspace-root e2e:ci:serve'
};

export const webServerCommand = webServerCommandList[NODE_ENV];

export const viewports = {
	desktop: { width: 1920, height: 961 },
	laptop: { width: 1540, height: 746 },
	smLaptop: { width: 1280, height: 690 }
};

export const desktopProjects = [
	{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: viewports.desktop } }
	// { name: 'chromium laptop', use: { ...devices['Desktop Chrome'], viewport: viewports.laptop } },
	// { name: 'firefox desktop', use: { ...devices['Desktop Firefox'], viewport: viewports.desktop } },
	// { name: 'webkit desktop', use: { ...devices['Desktop Safari'], viewport: viewports.desktop } }
];

export const mobileProjects = [
	// { name: 'mobile chrome - Pixel 7', use: { ...devices['Pixel 7'] } },
	// { name: 'mobile safari - iPhone 14', use: { ...devices['iPhone 14'] } }
];
