import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

test('Table renders header text', () => {
  render(<Table><TableHeader>H</TableHeader></Table>);
  expect(screen.getByText('H')).toBeVisible();
});

test('Table renders cell', () => {
  render(<Table><tbody><TableRow><TableCell>C</TableCell></TableRow></tbody></Table>);
  expect(screen.getByText('C')).toBeInTheDocument();
});
