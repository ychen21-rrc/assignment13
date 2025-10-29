import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Label Text',
  },
};
export default meta;
type Story = StoryObj<typeof Label>;
export const Default: Story = {};
