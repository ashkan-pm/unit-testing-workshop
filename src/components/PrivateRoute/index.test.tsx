import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { renderWithAllProviders, screen, waitFor } from 'test-utils';
import { startMirage } from 'mirage';
import { getToken, removeToken } from 'helpers/utils';
import PrivateRoute from './index';

const mockGetToken = getToken as jest.MockedFunction<typeof getToken>;
const mockRemoveToken = removeToken as jest.MockedFunction<typeof removeToken>;
jest.mock('helpers/utils', () => ({
  ...jest.requireActual('helpers/utils'),
  getToken: jest.fn(() => null),
  removeToken: jest.fn(() => null)
}));

const MockNavigate = Navigate as jest.MockedFunction<typeof Navigate>;
const mockNavigate = jest.fn(() => null);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn(() => null),
  useNavigate: () => mockNavigate
}));

const TestComponent = ({ text }: { text?: string }) => <span>{text}</span>;

afterEach(() => {
  jest.clearAllMocks();
});

test('Renders children if name and token exists', () => {
  const path = '/';
  const text = 'Test';
  mockGetToken.mockReturnValueOnce('token');

  renderWithAllProviders(
    <Routes>
      <PrivateRoute path={path} element={<TestComponent text={text} />} />
    </Routes>,
    { initialEntries: [path], initialState: { user: { name: 'John' } } }
  );
  expect(screen.getByText(text)).toBeInTheDocument();
});

test('Redirects to /login if token does not exist', () => {
  const path = '/';
  const text = 'Test';
  mockGetToken.mockReturnValueOnce(null);

  renderWithAllProviders(
    <Routes>
      <PrivateRoute path={path} element={<TestComponent text={text} />} />
    </Routes>,
    { initialEntries: [path] }
  );
  expect(MockNavigate).toHaveBeenCalledWith({ to: '/login', replace: true }, {});
});

test('Redirects to /login and removes token if it can not fetch user', async () => {
  const server = startMirage();
  const path = '/';
  const text = 'Test';
  mockGetToken.mockReturnValueOnce('token');

  renderWithAllProviders(
    <Routes>
      <PrivateRoute path={path} element={<TestComponent text={text} />} />
    </Routes>,
    { initialEntries: [path] }
  );
  await waitFor(() => expect(mockRemoveToken).toHaveBeenCalledTimes(1));
  expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  server.shutdown();
});
