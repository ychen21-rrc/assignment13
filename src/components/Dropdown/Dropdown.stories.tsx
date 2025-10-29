import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: { options: ['One', 'Two', 'Three'], disabled: false },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
