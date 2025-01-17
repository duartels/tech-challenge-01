import type { Meta, StoryObj } from '@storybook/react'

import { Overview } from './'

const meta = {
  title: 'Overview',
  component: Overview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Overview>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    accountName: 'John Doe',
    accountBalance: 1000,
  },
}
