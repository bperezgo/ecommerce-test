import './styles/main.scss';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './routes/App';
import { createBrowserHistory } from 'history';
import Context from './context';
import './images';

const history = createBrowserHistory();

ReactDOM.render(
  <Context.Provider value={{ categories: [] }}>
    <Router history={history}>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById('app')
);
