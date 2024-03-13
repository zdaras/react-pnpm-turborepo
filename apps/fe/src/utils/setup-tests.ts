import '@testing-library/jest-dom/vitest';

vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, options: object | undefined): string => {
			if (!options) {
				return key;
			}
			const values = Object.values(options).join('&');
			return `${key}?${values}`;
		},
		i18n: {
			changeLanguage: () => Promise.resolve()
		}
	}),
	Trans: () => null
}));
