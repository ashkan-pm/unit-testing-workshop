import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import Router from './Router';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
