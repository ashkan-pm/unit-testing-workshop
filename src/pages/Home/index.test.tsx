import React from 'react';
import user from '@testing-library/user-event';
import { renderWithAllProviders, screen } from 'test-utils';
import { removeToken } from 'helpers/utils';
import Home from './index';

const mockRemoveToken = removeToken as jest.MockedFunction<typeof removeToken>;
jest.mock('helpers/utils', () => ({
  removeToken: jest.fn(() => null)
}));

const mockNavigate = jest.fn(() => null);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

test('Renders welcome message with the correct name', () => {
  const name = 'John';
  const welcomeMessage = `Welcome, ${name}!`;

  renderWithAllProviders(<Home />, { initialState: { user: { name } } });
  const welcomeElement = screen.getByRole('heading', { name: welcomeMessage });
  expect(welcomeElement).toBeInTheDocument();
});

test('User can log out', () => {
  renderWithAllProviders(<Home />);
  const logoutButton = screen.getByRole('button', { name: 'Log out' });
  expect(logoutButton).toBeInTheDocument();

  user.click(logoutButton);
  expect(mockRemoveToken).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/login');
});
