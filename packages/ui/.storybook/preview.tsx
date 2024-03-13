import React from 'react';
import type { Preview } from '@storybook/react';
import { Provider } from '../src/styles/provider';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		sort: 'requiredFirst',
		layout: 'centered'
	},
	decorators: [
		StoryFn => (
			<Provider>
				<StoryFn />
			</Provider>
		)
	]
};

export default preview;
