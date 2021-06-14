import React, { useContext, useEffect } from 'react';
import { useGetProducts } from '../hooks/';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductList } from '../components/Products/ProductList';
import context from '../context';

export const Products = () => {
  const globalState = useContext(context);
  const { search } = useLocation();
  const searchValue = new URLSearchParams(search).get('search');
  const immediate = true;
  const { data, execute } = useGetProducts(searchValue, immediate);

  useEffect(() => {
    // This useEffect is beacuse when is executed a search, it was not set the new values
    if (globalState.search) {
      execute();
      globalState.search = false;
    }
  }, [globalState.search]);
  const { categories, products } = data;
  globalState.categories = [...categories];
  return (
    <div className="Products__container">
      <Breadcrumb categories={categories} />
      <div className="Products__modal">
        <ProductList products={products} />
      </div>
    </div>
  );
};
