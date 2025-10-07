import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'Card content'
  }
};
export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story = {};
