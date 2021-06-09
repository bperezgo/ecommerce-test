import React, { useEffect, useState } from 'react';
import fetchApi from '../fetchApi';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await fetchApi.get(`/api/items?q=${'ipod'}`)
    }
    getProducts()
  }, []);

  return <div>Products</div>;
};
