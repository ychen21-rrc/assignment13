import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('Label is visible', () => {
  render(<Label>Username</Label>);
  expect(screen.getByText('Username')).toBeVisible();
});

test('Label renders as label tag', () => {
  const { container } = render(<Label>Tag</Label>);
  expect(container.querySelector('label')).toBeInTheDocument();
});
