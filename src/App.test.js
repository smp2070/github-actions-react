import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test} from '@jest/globals';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react1111/i);
  expect(linkElement).toBeInTheDocument();
});
