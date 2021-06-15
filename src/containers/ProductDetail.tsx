import React, { useContext } from 'react';
import { useAsync } from '../hooks/useAsync';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { useRouteMatch } from 'react-router-dom';
import fetchApi from '../services/fetchApi';
import { ProductDetailResponse } from '../@types';
import { formatPrice } from '../utils/front';
import context from '../context';

const getItemInfo = async (
  itemId: string | undefined
): Promise<ProductDetailResponse.Item | undefined> => {
  if (itemId) {
    const { data } = await fetchApi.get<ProductDetailResponse.Data>(
      `/api/items/${itemId}`
    );
    return data.item;
  }
  return;
};

export const ProductDetail = () => {
  const value = useContext(context);
  const match = useRouteMatch<{ itemId?: string }>();
  const {
    params: { itemId },
  } = match;

  const useAsyncParams = {
    asyncFunc: getItemInfo,
    immediate: true,
    funcParams: itemId,
    initialData: {} as ProductDetailResponse.Item,
  };

  const { data: product, loading } = useAsync<ProductDetailResponse.Item, any>(
    useAsyncParams
  );

  const {
    picture,
    description,
    price,
    title = '',
    sold_quantity = '',
    condition = '',
  } = product;
  if (loading) return <Loading />;
  return (
    <div className="Products__container ProductDetail">
      <Breadcrumb categories={value.categories} />
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
