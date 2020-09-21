import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from 'helpers/utils';

function AuthPage({ children }: { children: React.ReactElement }) {
  const token = getToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AuthPage;
