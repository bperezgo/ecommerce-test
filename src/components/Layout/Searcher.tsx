import React from 'react';
import searchLogo from '@assets/images/ic_Search.png';

export const Searcher = () => {
  return (
    <div className="Searcher__container">
      <input type="text" className="Searcher__input" placeholder="Nunca dejes de buscar" />
      <div className="Searcher__lens">
        <img src={searchLogo} alt="lens" />
      </div>
    </div>
  );
};
