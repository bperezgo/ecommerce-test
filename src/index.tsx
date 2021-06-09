import './styles/main.scss';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './routes/App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
