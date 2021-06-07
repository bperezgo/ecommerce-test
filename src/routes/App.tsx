import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { serverRoutes } from './serverRoutes';
import { hot } from 'react-hot-loader/root';

export const App = hot(() => (
  <BrowserRouter>
    <Switch>
      {serverRoutes.map((routeProps) => (
        <Route {...routeProps} />
      ))}
    </Switch>
  </BrowserRouter>
));
