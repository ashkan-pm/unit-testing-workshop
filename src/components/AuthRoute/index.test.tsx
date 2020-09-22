import React from 'react';
import { Routes } from 'react-router-dom';
import { renderWithRouter, screen } from 'test-utils';
import AuthRoute from './index';

const TestComponent = ({ text }: { text: string }) => <span>{text}</span>;

test('AuthRoute renders', () => {
  const path = '/login';
  const text = 'Test';

  renderWithRouter(
    <Routes>
      <AuthRoute path={path} element={<TestComponent text={text} />} />
    </Routes>,
    { initialEntries: [path] }
  );

  expect(screen.getByText(text)).toBeInTheDocument();
});
