import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' }
  },
  args: {
    placeholder: 'Type here',
    disabled: false
  }
};
export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
