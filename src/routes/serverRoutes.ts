import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';
import { Products } from '../containers/Products';
import { ProductDetail } from '../containers/ProductDetail';
import { NotFound } from '../containers/NotFound';

const AsyncProductsContainer = React.lazy(() =>
  import('../containers/Products').then(({ Products }) => ({
    default: Products,
  }))
);

const AsyncProductDetailContainer = React.lazy(() =>
  import('../containers/ProductDetail').then(({ ProductDetail }) => ({
    default: ProductDetail,
  }))
);

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
  {
    key: 3,
    path: '/items/:itemId',
    exact: true,
    component: ProductDetail,
  },
  {
    key: 4,
    component: NotFound,
  },
];
