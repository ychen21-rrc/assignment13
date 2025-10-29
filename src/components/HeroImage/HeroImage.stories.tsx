import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';
import aurora from '../../images/aurora.jpg';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  args: { src: aurora, alt: 'Hero', heading: 'Welcome', subheading: 'Subheading', disabled: false },
  argTypes: {
    disabled: { control: 'boolean' },
    heading: { control: 'text' },
    subheading: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof HeroImage>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
