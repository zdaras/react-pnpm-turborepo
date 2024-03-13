import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './Anchor';

const meta: Meta<typeof Anchor> = {
	title: 'Anchor',
	component: Anchor
} satisfies Meta<typeof Anchor>;

export default meta;

export const AnchorStory: StoryObj<typeof meta> = {
	render: args => <Anchor {...args} />,
	args: {
		text: 'External link'
	}
};
