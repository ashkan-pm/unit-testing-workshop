import React, { ComponentType, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

function renderWithRouter(
  ui: ReactElement,
  { initialEntries = ['/'], ...options }: { initialEntries?: string[] } & RenderOptions = {}
) {
  const Wrapper = ({ children }: { children: ReactElement }) => (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  );

  return render(ui, { wrapper: Wrapper as ComponentType, ...options });
}

export * from '@testing-library/react';
export { renderWithRouter };
