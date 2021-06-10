import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { useRouteMatch } from 'react-router-dom';
import fetchApi from '../services/fetchApi';
import { ProductDetailResponse } from '../@types';

export const ProductDetail = () => {
  const [product, setProduct] = useState<Partial<ProductDetailResponse.Item>>(
    {}
  );
  const match = useRouteMatch<{ itemId?: string }>();
  const {
    params: { itemId },
  } = match;

  useEffect(() => {
    const getItemInfo = async () => {
      if (itemId) {
        const { data } = await fetchApi.get<ProductDetailResponse.Data>(
          `/api/items/${itemId}`
        );
        setProduct(data.item);
      }
    };
    getItemInfo();
  });
  const { picture } = product;
  return (
    <div>
      <Breadcrumb categories={[]} />
      <p>ProductDetail {itemId}</p>
      {picture && <img src={picture} alt={itemId} />}
    </div>
  );
};
