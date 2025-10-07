import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

test('Dropdown is visible', () => {
  const { container } = render(<Dropdown options={['A']} />);
  expect(container.querySelector('select')).toBeVisible();
});

test('Dropdown background changes when disabled', () => {
  const { container } = render(<Dropdown options={['A']} disabled />);
  expect(container.firstChild).toHaveStyleRule('background', '#f0f0f0');
});
