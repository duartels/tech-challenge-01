import { SidebarProps } from '@domain';
import { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '.';

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
	argTypes: {
		title: { control: 'text' },
		menuOptions: {
			control: 'object',
			description: 'Array of menu options (e.g. ["Home", "About", "Contact"])'
		},
		isOpen: { control: 'boolean' }
	}
} as Meta<SidebarProps>;

type Story = StoryObj<SidebarProps>;

export const Default: Story = {
	args: {
		title: 'Menu',
		menuOptions: ['Home', 'About', 'Contact'], // an array of strings
		isOpen: true,
		onClose: () => alert('Close button clicked')
	}
};

export const NotClosable: Story = {
	args: {
		title: 'Menu',
		menuOptions: ['Home', 'About', 'Contact'],
		isOpen: true
	}
};

export const Closed: Story = {
	args: {
		...Default.args,
		isOpen: false
	}
};
