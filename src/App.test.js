import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi Mahendra nath/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link new case', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi Mahendra nath/i);
  expect(linkElement).toBeInTheDocument();
});