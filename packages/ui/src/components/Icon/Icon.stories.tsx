import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '.';
import { iconsMap } from './Icon.list';
import { IconSize } from './Icon.types';

const meta: Meta<typeof Icon> = {
	title: 'Icon',
	component: Icon,
	argTypes: {
		icon: {
			options: Object.keys(iconsMap),
			control: 'select'
		},
		size: {
			options: [IconSize.Sm, IconSize.Md, IconSize.Lg],
			control: 'select'
		}
	}
} satisfies Meta<typeof Icon>;

export default meta;

export const IconStory: StoryObj<typeof meta> = {
	render: args => <Icon {...args} />,
	args: {
		icon: 'XIcon'
	}
};
