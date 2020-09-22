import React, { ComponentType, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from 'redux/ducks/reducers';

function renderWithAllProviders(
  ui: ReactElement,
  {
    initialEntries = ['/'],
    initialState,
    store = createStore(rootReducer, initialState),
    ...options
  }: { initialEntries?: string[]; initialState?: any; store?: Store } & RenderOptions = {}
) {
  const Wrapper = ({ children }: { children: ReactElement }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper as ComponentType, ...options }) };
}

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
export { renderWithRouter, renderWithAllProviders };
