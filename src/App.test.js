import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Subscribe and follow @rakibtg link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Subscribe and follow @rakibtg/i);
  expect(linkElement).toBeInTheDocument();
});
