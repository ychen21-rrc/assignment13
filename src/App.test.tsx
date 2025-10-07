import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders demo heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Component Library Demo/i);
  expect(linkElement).toBeInTheDocument();
});
