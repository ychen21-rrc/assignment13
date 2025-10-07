import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  args: { disabled: false },
  argTypes: { disabled: { control: 'boolean' } }
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>Header</TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Canada</TableCell>
          <TableCell>USA</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>Footer</TableFooter>
    </Table>
  )
};

export const Disabled: Story = { args: { disabled: true } };
