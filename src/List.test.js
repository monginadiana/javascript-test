import { render, screen } from '@testing-library/react';
import List from './List';

test('Component List', () => {
  render(<List />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});