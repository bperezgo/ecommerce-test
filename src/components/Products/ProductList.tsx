import React from 'react';
import { Product } from '../Product';
import { ProductsResponse } from '../../@types';

type ProductListProps = {
  products: ProductsResponse.Item[];
};

export const ProductList = ({ products }: ProductListProps) => (
  <>
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </>
);
