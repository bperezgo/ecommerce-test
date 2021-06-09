import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from '../components/Products/product';
import fetchApi from '../fetchApi';
import { ProductsResponse } from '../@types';

export const Products = () => {
  const history = useHistory();
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
        setProducts(data.items);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="Products__container">
      <div className="Products__modal">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
