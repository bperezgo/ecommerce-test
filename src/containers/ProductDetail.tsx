import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { useRouteMatch } from 'react-router-dom';
import fetchApi from '../services/fetchApi';
import { ProductDetailResponse } from '../@types';
import { formatPrice } from '../utils/front';

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
  const {
    picture,
    description,
    price,
    title = '',
    sold_quantity = '',
    condition = '',
  } = product;
  return (
    <div className="Products__container">
      <Breadcrumb categories={['value1', 'value2']} />
      <div className="Products__modal">
        {picture && (
          <div className="ProductDetail_img_block">
            <img
              className="Globals__container_img"
              src={picture}
              alt={itemId}
            />
          </div>
        )}
        <div className="ProductDetail__min_description">
          <p>
            {condition} - {sold_quantity} vendidas
          </p>
          <p>{title}</p>
          <p>{price && formatPrice(price.amount, price.currency)}</p>
          <Button message="comprar" />
        </div>
        <div className="ProductDetail__description">
          <p>Descripción del producto</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
