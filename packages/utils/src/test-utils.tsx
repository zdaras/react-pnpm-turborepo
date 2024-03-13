import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach } from 'vitest';

afterEach(() => {
	cleanup();
});

const mockComponent =
	({ children }: { children?: React.ReactNode } = {}) =>
	({ children: childrenAsProps }: any) =>
		(children || childrenAsProps || <div>Component</div>) as React.ReactElement;

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { render, mockComponent };
export * from 'vitest';
