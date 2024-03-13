import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-root-attributes',
		'storybook-addon-pseudo-states'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	}
};

export default config;
