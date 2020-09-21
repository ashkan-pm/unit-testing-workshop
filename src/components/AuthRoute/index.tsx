import React from 'react';
import { Route } from 'react-router-dom';
import AuthPage from './AuthPage';

type Props = {
  path: string;
  element: React.ReactElement;
};
function PrivateRoute({ path, element }: Props) {
  return <Route path={path} element={<AuthPage>{element}</AuthPage>} />;
}

export default PrivateRoute;
