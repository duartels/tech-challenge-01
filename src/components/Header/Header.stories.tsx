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
						width: '412px',
						height: '800px'
					}
				},
				md: {
					name: 'Medium (md)',
					styles: {
						width: '720px',
						height: '1024px'
					}
				},
				lg: {
					name: 'Large (lg)',
					styles: {
						width: '1200px',
						height: '800px'
					}
				}
			},
			defaultViewport: 'md'
		}
	}
};

export default meta;

// Default story with responsive behavior
export const Default: StoryObj<typeof Header> = {
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

// Small screen example
export const SmallScreen: StoryObj<typeof Header> = {
	args: {
		name: 'Small Screen Header',
		menuOptions: ['Small Option 1', 'Small Option 2', 'Small Option 3']
	},
	parameters: {
		viewport: {
			defaultViewport: 'sm' // Force 'sm' viewport for this story
		}
	}
};

// Medium screen example
export const MediumScreen: StoryObj<typeof Header> = {
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

// Large screen example
export const LargeScreen: StoryObj<typeof Header> = {
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
