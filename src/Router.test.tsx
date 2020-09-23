import React from 'react';
import { renderWithRouter, renderWithAllProviders, screen } from 'test-utils';
import { startMirage } from 'mirage';
import { getToken } from 'helpers/utils';
import Router from './Router';

const mockGetToken = getToken as jest.MockedFunction<typeof getToken>;
jest.mock('helpers/utils', () => ({
  ...jest.requireActual('helpers/utils'),
  getToken: jest.fn(() => null)
}));

afterEach(() => {
  jest.clearAllMocks();
});

test('Bad route renders not found message', () => {
  renderWithRouter(<Router />, { initialEntries: ['/some-route-that-does-not-match'] });
  const notFoundText = 'You seem to have lost your way...';
  expect(screen.getByRole('heading', { name: notFoundText })).toBeInTheDocument();
});

test('Home page renders welcome message if the user is logged in', async () => {
  const server = startMirage();
  const name = 'John';
  server.get('/user', () => ({ name }));
  mockGetToken.mockReturnValue('token');

  renderWithAllProviders(<Router />, { initialEntries: ['/'] });

  const loadingElement = await screen.findByLabelText('loading');
  expect(loadingElement).toBeInTheDocument();

  const welcomeMessage = `Welcome, ${name}!`;
  const welcomeElement = await screen.findByRole('heading', { name: welcomeMessage });
  expect(welcomeElement).toBeInTheDocument();

  server.shutdown();
});
