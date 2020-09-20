import React from 'react';
import { LayoutWrapper } from './styles';

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
