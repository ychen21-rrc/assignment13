import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  args: { name: 'group', value: 'A', label: 'Option A', disabled: false },
  argTypes: { disabled: { control: 'boolean' }, label: { control: 'text' } },
};
export default meta;
type Story = StoryObj<typeof RadioButton>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
