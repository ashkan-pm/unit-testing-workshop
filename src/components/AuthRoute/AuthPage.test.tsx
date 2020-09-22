import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';
import { getToken } from 'helpers/utils';
import AuthPage from './AuthPage';

jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(() => null)
}));
const MockNavigate = Navigate as jest.MockedFunction<typeof Navigate>;

jest.mock('helpers/utils', () => ({
  getToken: jest.fn(() => null)
}));
const mockGetToken = getToken as jest.MockedFunction<typeof getToken>;

const TestComponent = ({ text = 'Test' }: { text?: string }) => <span>{text}</span>;

afterEach(() => {
  jest.clearAllMocks();
});

test('Renders children if token does not exist', () => {
  const text = 'Test';
  mockGetToken.mockReturnValue(null);
  render(
    <AuthPage>
      <TestComponent text={text} />
    </AuthPage>
  );
  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(screen.getByText(text)).toBeInTheDocument();
});

test('Redirects to / if token exists', () => {
  mockGetToken.mockReturnValue('token');
  render(
    <AuthPage>
      <TestComponent />
    </AuthPage>
  );
  expect(mockGetToken).toHaveBeenCalledTimes(1);
  expect(MockNavigate).toHaveBeenCalledWith({ to: '/', replace: true }, {});
});
