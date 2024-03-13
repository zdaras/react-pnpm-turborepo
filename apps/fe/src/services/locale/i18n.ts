import i18n, { type FallbackLng, type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { defaultLocale } from './languages';

const detectionOptions = {
	order: ['path', 'cookie', 'localStorage', 'navigator'],
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,
	caches: ['localStorage', 'cookie']
};

const options = (fallbackLng: FallbackLng = defaultLocale): InitOptions => ({
	detection: detectionOptions,
	load: 'languageOnly',
	fallbackLng,
	react: {
		nsMode: 'default',
		useSuspense: false
	},
	interpolation: {
		escapeValue: false
	},
	keySeparator: false,
	nsSeparator: false
});

export const initi18 = (fallbackLng?: FallbackLng) => {
	const opts = options(fallbackLng);
	i18n.use(initReactI18next).use(LanguageDetector).init(opts);
};

export const tr = i18n.t.bind(i18n);

export default i18n;

export const getCurrentLanguage = (): string => i18n.language;
