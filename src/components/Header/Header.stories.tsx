import { HeaderProps } from '@domain';
import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	argTypes: {
		name: { control: 'text' },
		menuOptions: { control: 'object' }
	},
	parameters: {
		viewport: {
			viewports: {
				sm: {
					name: 'Small (sm)',
					styles: {
						width: '640px',
						height: '800px'
					}
				},
				md: {
					name: 'Medium (md)',
					styles: {
						width: '768px',
						height: '1024px'
					}
				},
				lg: {
					name: 'Large (lg)',
					styles: {
						width: '1024px',
						height: '800px'
					}
				}
			},
			defaultViewport: 'responsive'
		}
	}
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
	args: {
		name: 'My Application',
		menuOptions: ['Option 1', 'Option 2', 'Option 3']
	},
	parameters: {
		viewport: {
			defaultViewport: 'responsive'
		}
	}
};

export const SmallScreen: Story = {
	args: {
		name: 'Small Screen Header',
		menuOptions: ['Small Option 1', 'Small Option 2', 'Small Option 3']
	},
	parameters: {
		viewport: {
			defaultViewport: 'sm'
		}
	}
};

export const MediumScreen: Story = {
	args: {
		name: 'Medium Screen Header',
		menuOptions: ['Medium Option 1', 'Medium Option 2', 'Medium Option 3']
	},
	parameters: {
		viewport: {
			defaultViewport: 'md'
		}
	}
};

export const LargeScreen: Story = {
	args: {
		name: 'Large Screen Header',
		menuOptions: ['Large Option 1', 'Large Option 2', 'Large Option 3']
	},
	parameters: {
		viewport: {
			defaultViewport: 'lg'
		}
	}
};
