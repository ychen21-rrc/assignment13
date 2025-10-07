import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from './Text';

test('Text is visible', () => {
  const { container } = render(<Text />);
  expect(container.querySelector('input')).toBeVisible();
});

test('Text background changes when disabled', () => {
  const { container } = render(<Text disabled />);
  expect(container.firstChild).toHaveStyleRule('background', '#f0f0f0');
});
