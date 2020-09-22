import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

test('Layout renders correctly', () => {
  render(<Layout />);
  const layout = screen.getByRole('main');
  expect(layout).toMatchSnapshot();
});
