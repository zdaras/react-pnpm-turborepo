import { Provider as ThemeProvider } from '@packages/ui';
import { act, cleanup, render, renderHook } from '@testing-library/react';
import { assert, afterEach, describe, expect, it, test } from 'vitest';
import { ReactQueryProvider } from '#/services/react-query/provider';

afterEach(() => {
	cleanup();
});

const renderWithTheme = (ui: React.ReactElement) =>
	render(ui, {
		wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>
	});

const mockComponent =
	({ children }: { children?: React.ReactNode } = {}) =>
	({ children: childrenAsProps }: { children?: React.ReactNode }) =>
		(children || childrenAsProps || <div>Component</div>) as React.ReactElement;

const withQueryClientProvider =
	() =>
	({ children }: { children?: React.ReactNode }) => <ReactQueryProvider>{children}</ReactQueryProvider>;

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export {
	render,
	describe,
	expect,
	it,
	assert,
	test,
	renderHook,
	act,
	mockComponent,
	withQueryClientProvider,
	renderWithTheme
};
