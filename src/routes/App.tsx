import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { serverRoutes } from './serverRoutes';

export const App = () => (
  <BrowserRouter>
    <Switch>
      {serverRoutes.map((routeProps) => (
        <Route {...routeProps} />
      ))}
    </Switch>
  </BrowserRouter>
);
