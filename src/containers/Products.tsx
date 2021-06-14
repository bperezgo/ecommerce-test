import React, { useContext } from 'react';
import { useGetProducts } from '../hooks/';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductList } from '../components/Products/ProductList';
import context from '../context';

export const Products = () => {
  const value = useContext(context);
  const { search } = useLocation();
  const searchValue = new URLSearchParams(search).get('search');

  const { data } = useGetProducts(searchValue);

  const { categories, products } = data;
  value.categories = [...categories];
  return (
    <div className="Products__container">
      <Breadcrumb categories={categories} />
      <div className="Products__modal">
        <ProductList products={products} />
      </div>
    </div>
  );
};
