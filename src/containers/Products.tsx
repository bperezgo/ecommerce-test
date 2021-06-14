import React, { useEffect, useState } from 'react';
import { useAsync } from '../hooks/useAsync';
import { useHistory } from 'react-router-dom';
import { Product } from '../components/Products/product';
import { Breadcrumb } from '../components/Breadcrumb';
import fetchApi from '../services/fetchApi';
import { ProductList } from '../components/Products/ProductList';
import { ProductsResponse } from '../@types';

interface IProductsResponse {
  categories: ProductsResponse.Category[];
  products: ProductsResponse.Item[];
}

const getProducts = async (
  state: any
): Promise<IProductsResponse | undefined> => {
  if (state.searcherValue) {
    const { data } = await fetchApi.get<ProductsResponse.Data>(
      `/api/items?q=${state.searcherValue}`
    );
    return { categories: data.categories, products: data.items };
  }
  return;
};

export const Products = () => {
  const history = useHistory();

  const {
    location: { state },
  } = history;

  const asyncParams = {
    asyncFunc: getProducts,
    immediate: true,
    funcParams: state,
    initialData: { categories: [], products: [] },
  };

  const { data } = useAsync<IProductsResponse, any>(asyncParams);

  const { categories, products } = data;
  return (
    <div className="Products__container">
      <Breadcrumb categories={categories} />
      <div className="Products__modal">
        <ProductList products={products} />
      </div>
    </div>
  );
};
