import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
