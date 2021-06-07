import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';

export const serverRoutes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];
