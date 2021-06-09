import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';
import { Products } from '../containers/Products';

export const serverRoutes: RouteConfig[] = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 2,
    path: '/items',
    exact: true,
    component: Products,
  },
];
