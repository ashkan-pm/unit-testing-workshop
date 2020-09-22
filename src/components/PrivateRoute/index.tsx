import React from 'react';
import { Route } from 'react-router-dom';
import AuthGuard from './AuthGuard';

type Props = {
  path: string;
  element: React.ReactElement;
};
function PrivateRoute({ element }: Props) {
  return <Route element={<AuthGuard>{element}</AuthGuard>} />;
}

export default PrivateRoute;
