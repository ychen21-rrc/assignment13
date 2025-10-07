import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

test('Radio label visible', () => {
  render(<RadioButton name="g" value="V" label="LBL" />);
  expect(screen.getByText('LBL')).toBeVisible();
});

test('Radio disabled state reflected', () => {
  render(<RadioButton name="g" value="V" label="LBL" disabled />);
  const input = screen.getByRole('radio');
  expect(input).toBeDisabled();
});
