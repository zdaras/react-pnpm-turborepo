import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ModalSize } from './Modal.types';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal
} satisfies Meta<typeof Modal>;

export default meta;

export const ModalStory: StoryObj<typeof meta> = {
	render: args => <Modal {...args} />,
	args: {
		isOpen: true,
		size: ModalSize.medium,
		title: 'Title',
		children: 'Open Modal'
	}
};
