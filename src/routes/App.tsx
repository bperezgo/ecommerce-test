import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { serverRoutes } from './serverRoutes';
import { hot } from 'react-hot-loader/root';
import { Layout } from '../components/Layout';

export const App = hot(() => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {serverRoutes.map((routeProps) => (
          <Route {...routeProps} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
));
