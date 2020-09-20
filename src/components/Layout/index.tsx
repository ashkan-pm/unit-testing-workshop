import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './styles';

function Layout() {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
}

export default Layout;
