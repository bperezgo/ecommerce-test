import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from '../components/Products/product';
import { Breadcrumb } from '../components/Breadcrumb';
import fetchApi from '../fetchApi';
import { ProductsResponse } from '../@types';

export const Products = () => {
  const history = useHistory();
  const [categories, setCategories] = useState<ProductsResponse.Category[]>([]);
  const [products, setProducts] = useState<ProductsResponse.Item[]>([]);
  useEffect(() => {
    const {
      location: { state },
    } = history;
    const getProducts = async () => {
      if (state.searcherValue) {
        const { data } = await fetchApi.get<ProductsResponse.Data>(
          `/api/items?q=${state.searcherValue}`
        );
        setCategories(data.categories);
        setProducts(data.items);
      }
    };

    getProducts();
  }, []);
  return (
    <div className="Products__container">
      <Breadcrumb categories={categories} />
      <div className="Products__modal">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
