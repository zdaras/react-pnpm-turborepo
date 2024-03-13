import { useEffect } from 'react';

export const useScrollLock = (enabled = false) => {
	useEffect(() => {
		const originalStyle = 'auto';
		document.body.style.overflow = enabled ? 'hidden' : originalStyle;
		const htmlElement = document.querySelector('html');
		if (htmlElement) {
			htmlElement.style.overflow = enabled ? 'hidden' : originalStyle;
		}

		return () => {
			document.body.style.overflow = originalStyle;
			if (htmlElement) {
				htmlElement.style.overflow = originalStyle;
			}
		};
	}, [enabled]);
};
