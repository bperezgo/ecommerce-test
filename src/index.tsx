import './styles/main.scss';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './routes/App';
import { createBrowserHistory } from 'history';
import context from './context';
import { initialState } from './state/initialState';
import './images';

const history = createBrowserHistory();

ReactDOM.render(
  <context.Provider value={initialState}>
    <Router history={history}>
      <App />
    </Router>
  </context.Provider>,
  document.getElementById('app')
);
