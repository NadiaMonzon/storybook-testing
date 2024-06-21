import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './Button';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};