import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import fetchApi from '../services/fetchApi';

export const ProductDetail = () => {
  const [product, setProduct] = useState();
  const match = useRouteMatch<{ itemId?: string }>();
  const {
    params: { itemId },
  } = match;

  useEffect(() => {
    const getItemInfo = async () => {
      if (itemId) {
        const { data } = await fetchApi.get(`/api/items/${itemId}`);
      }
    };
    getItemInfo();
  });
  return <div>ProductDetail {itemId}</div>;
};
