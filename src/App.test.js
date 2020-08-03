import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders KMBot', () => {
  const { getByText } = render(<App />);
  const AppHeader = getByText(/KMBot/i);
  expect(AppHeader).toBeInTheDocument();
});