import { useCallback } from 'react';
import { useTranslation as useTrans } from 'react-i18next';

export const useTranslation = () => {
	const { t, i18n } = useTrans();

	const changeLanguage = useCallback(
		(lang: 'en' | 'ka') => {
			if (i18n.language !== lang) {
				i18n.changeLanguage(lang);
			}
		},
		[i18n]
	);

	return { t, i18n, lang: i18n.language, changeLanguage };
};
