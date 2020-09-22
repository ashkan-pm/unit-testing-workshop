import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { renderWithRouter, screen } from 'test-utils';
import { getToken } from 'helpers/utils';
import AuthRoute from './index';

const mockGetToken = getToken as jest.MockedFunction<typeof getToken>;
jest.mock('helpers/utils', () => ({
  getToken: jest.fn(() => null)
}));

const MockNavigate = Navigate as jest.MockedFunction<typeof Navigate>;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn(() => null)
}));

const TestComponent = ({ text }: { text?: string }) => <span>{text}</span>;

afterEach(() => {
  jest.clearAllMocks();
});

test('Renders children if token does not exist', () => {
  const path = '/login';
  const text = 'Test';
  mockGetToken.mockReturnValue(null);

  renderWithRouter(
    <Routes>
      <AuthRoute path={path} element={<TestComponent text={text} />} />
    </Routes>,
    { initialEntries: [path] }
  );
  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(screen.getByText(text)).toBeInTheDocument();
});

test('Redirects to / if token exists', () => {
  const path = '/login';
  mockGetToken.mockReturnValue('token');

  renderWithRouter(
    <Routes>
      <AuthRoute path={path} element={<TestComponent />} />
    </Routes>,
    { initialEntries: [path] }
  );
  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(MockNavigate).toHaveBeenCalledWith({ to: '/', replace: true }, {});
});
