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
    <div className="Products__container ProductDetail">
      <Breadcrumb categories={['value1', 'value2']} />
      <div className="Products__modal">
        <div className="ProductDetail__container">
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
            <p className="ProductDetail__min_sold_quantity">
              {condition} - {sold_quantity} vendidas
            </p>
            <p className="ProductDetail__min_title">{title}</p>
            <p className="ProductDetail__min_price">
              {price && formatPrice(price.amount, price.currency)}
            </p>
            <Button message="comprar" />
          </div>
          <div className="ProductDetail__description">
            <p className="ProductDetail__description_title">
              Descripción del producto
            </p>
            <p className="ProductDetail__description_content">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
