import { Meta, StoryObj } from '@storybook/react';

import { SidebarProps } from '../../domain';
import { Sidebar } from '.';

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
	argTypes: {
		orientation: {
			control: {
				type: 'select',
				options: ['left', 'right']
			}
		}
	}
} as Meta<SidebarProps>;

type Story = StoryObj<SidebarProps>;

export const Default: Story = {
	args: {
		title: 'Menu',
		menuOptions: ['Home', 'About', 'Contact'],
		isOpen: true,
		onClose: () => alert('Close button clicked'),
		orientation: 'left'
	}
};

export const RightOrientation: Story = {
	args: {
		...Default.args,
		orientation: 'right'
	}
};

export const Closed: Story = {
	args: {
		...Default.args,
		isOpen: false
	}
};
