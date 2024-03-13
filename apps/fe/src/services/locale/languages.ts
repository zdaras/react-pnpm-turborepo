export const languages = [
	{ name: 'English', displayName: 'EN', value: 'en', id: 'en' },
	{ name: 'ქართული', displayName: 'KA', value: 'ka', id: 'ka' }
] as const;

export const defaultLanguage = languages[0];

export const defaultLocale = languages[0].id;
