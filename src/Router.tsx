import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';
import AuthRoute from 'components/AuthRoute';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <PrivateRoute path="/" element={<Home />} />
        <AuthRoute path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
