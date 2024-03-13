import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { type ThemeMode, defaultTheme, themes } from './themes';

export const Provider = ({ children, theme = defaultTheme }: { theme?: ThemeMode; children: React.ReactNode }) => {
	const activeTheme = themes[theme];

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};
