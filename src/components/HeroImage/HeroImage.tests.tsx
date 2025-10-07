import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('Hero displays heading', () => {
  render(<HeroImage src="x" alt="a" heading="Hello" />);
  expect(screen.getByText('Hello')).toBeVisible();
});

test('Hero renders img', () => {
  const { container } = render(<HeroImage src="x" alt="a" />);
  expect(container.querySelector('img')).toBeInTheDocument();
});
