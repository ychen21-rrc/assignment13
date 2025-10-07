import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Card } from './Card';

test('Card content is visible', () => {
  render(<Card>Content</Card>);
  expect(screen.getByText('Content')).toBeVisible();
});

test('Card background changes when disabled', () => {
  const { container } = render(<Card disabled>Content</Card>);
  expect(container.firstChild).toHaveStyleRule('background', '#fafafa');
});
