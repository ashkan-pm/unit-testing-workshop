import React from 'react';
import ReactDOM from 'react-dom';
import { DEVELOPMENT } from 'helpers/constants';
import { startMirage } from './mirage';
import App from './App';
import './i18n';
import './index.css';

if (process.env.NODE_ENV === DEVELOPMENT) {
  startMirage();
}

ReactDOM.render(<App />, document.getElementById('root'));
