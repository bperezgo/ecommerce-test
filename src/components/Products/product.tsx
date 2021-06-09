import React from 'react';
import { ProductsResponse } from '../../@types';

export const Product = ({
  id,
  picture,
  price,
  title,
}: ProductsResponse.Item) => {
  return (
    <div className="Product__container">
      <div className="Product__img_block">
        <img src={picture} alt={id} />
      </div>
      <div className="Product__description">
        <p className="Product__price">{price.amount}</p>
        <p className="Product__title">{title}</p>
        <p className="Product__title">Completo único</p>
      </div>
      <span className="Product__head_note">
        <p>Alguna parte</p>
      </span>
    </div>
  );
};
