import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductsResponse } from '../../@types';
import { formatPrice } from '../../utils/front';

export const Product = ({
  id,
  picture,
  price,
  title,
  free_shipping,
}: ProductsResponse.Item) => {
  const history = useHistory();
  const handleClick = (id: string) => {
    history.push(`/items/${id}`);
  };
  return (
    <div className="Product__container" onClick={() => handleClick(id)}>
      <div className="Product__img_block">
        <img className="Globals__container_img" src={picture} alt={id} />
      </div>
      <div className="Product__description">
        <div className="Product__price">
          <p>{formatPrice(price.amount, price.currency)}</p>
          {free_shipping && (
            <img src={'assets/ic_shipping.png'} alt="shipping" />
          )}
        </div>
        <p className="Product__title">{title}</p>
        <p className="Product__title">Completo único</p>
      </div>
      <span className="Product__head_note">
        <p>Alguna parte</p>
      </span>
    </div>
  );
};
