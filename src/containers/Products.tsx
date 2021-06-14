import React, { useContext } from 'react';
import { useGetProducts } from '../hooks/';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import fetchApi from '../services/fetchApi';
import { ProductList } from '../components/Products/ProductList';
import { ProductsResponse } from '../@types';
import context from '../context';

interface IProductsResponse {
  categories: ProductsResponse.Category[];
  products: ProductsResponse.Item[];
}

const getProducts = async (
  searcherValue: string | null
): Promise<IProductsResponse | undefined> => {
  if (searcherValue) {
    const { data } = await fetchApi.get<ProductsResponse.Data>(
      `/api/items?q=${searcherValue}`
    );
    return { categories: data.categories, products: data.items };
  }
  return;
};

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
