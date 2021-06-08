import React from 'react';
import searchLogo from '@assets/images/ic_Search.png';

export const Searcher = () => {
  return (
    <div className="Searcher__container">
      <input type="search" />
      <img src={searchLogo} alt="lens" />
    </div>
  );
};
