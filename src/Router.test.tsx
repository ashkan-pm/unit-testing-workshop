import React from 'react';
import { renderWithRouter, screen } from 'test-utils';
import Router from './Router';

test('Bad route renders not found message', () => {
  renderWithRouter(<Router />, { initialEntries: ['/some-route-that-does-not-match'] });
  const notFoundText = 'You seem to have lost your way...';
  expect(screen.getByRole('heading', { name: notFoundText })).toBeInTheDocument();
});
