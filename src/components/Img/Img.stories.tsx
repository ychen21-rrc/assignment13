import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';
import sky from '../../images/sky.jpg';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  args: { src: sky, alt: 'Example', disabled: false },
  argTypes: {
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Img>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
