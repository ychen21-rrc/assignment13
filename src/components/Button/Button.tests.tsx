import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from './Button';

test('Button is visible', () => {
  render(<Button>Press</Button>);
  const el = screen.getByText('Press');
  expect(el).toBeVisible();
});

test('Button background changes when disabled', () => {
  const { container } = render(<Button disabled>Press</Button>);
  expect(container.firstChild).toHaveStyleRule('background', '#cccccc');
});
