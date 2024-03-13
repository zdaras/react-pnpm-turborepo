import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
	title: 'Table',
	component: Table
} satisfies Meta<typeof Table>;

export default meta;

export const TableStory: StoryObj<typeof meta> = {
	decorators: [
		Story => (
			<div style={{ minWidth: '600px' }}>
				<Story />
			</div>
		)
	],
	render: args => <Table {...args} />,
	args: {
		headers: [{ title: 'Code' }, { title: 'Name' }, { title: 'Category' }, { title: 'Quantity' }],
		data: [
			{ code: 'f230fh0g3', name: 'John Doe', category: 'Apparel', quantity: 10 },
			{ code: 'a345h435', name: 'Jim Doe', category: 'Electronics', quantity: 20 },
			{ code: 'asfop345', name: 'Jane Doe', category: 'Grocery', quantity: 30 },
			{ code: 'asfop345', name: 'Jane Doe', category: 'Grocery', quantity: 30 },
			{ code: 'asfop345', name: 'Jane Doe', category: 'Grocery', quantity: 30 },
			{ code: 'asfop345', name: 'Jane Doe', category: 'Grocery', quantity: 30 }
		]
	}
};
