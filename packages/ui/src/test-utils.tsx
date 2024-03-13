import { act, cleanup, render, renderHook } from '@testing-library/react';
import { assert, afterEach, describe, expect, it, test } from 'vitest';
import { Provider as ThemeProvider } from './styles';

afterEach(() => {
	cleanup();
});

const renderWithTheme = (ui: React.ReactElement): ReturnType<typeof render> =>
	render(ui, {
		wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>
	});

const mockComponent =
	({ children }: { children?: React.ReactNode } = {}) =>
	({ children: childrenAsProps }: any) =>
		(children || childrenAsProps || <div>Component</div>) as React.ReactElement;

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { render, describe, expect, it, assert, test, renderHook, act, mockComponent, renderWithTheme };
