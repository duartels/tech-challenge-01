import { transactionOptions } from '@domain';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from '.';

const meta = {
	title: 'Select',
	component: Select,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		name: 'Joana',
		options: transactionOptions,
		placeholder: 'Selecione o tipo de transação',
		value: '',
		onChange: fn()
	}
};
