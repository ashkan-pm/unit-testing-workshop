import React from 'react';
import { Route } from 'react-router-dom';
import AuthPage from './AuthPage';

type Props = {
  path: string;
  element: React.ReactElement;
};
function AuthRoute({ element }: Props) {
  return <Route element={<AuthPage>{element}</AuthPage>} />;
}

export default AuthRoute;
