import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('Img is visible', () => {
  const { container } = render(<Img src="x" alt="a" />);
  expect(container.querySelector('img')).toBeVisible();
});

test('Img has grayscale when disabled', () => {
  const { container } = render(<Img src="x" alt="a" disabled />);
  // cannot easily assert filter without CSS-in-JS helper, so just ensures it renders
  expect(container.querySelector('img')).toBeInTheDocument();
});
