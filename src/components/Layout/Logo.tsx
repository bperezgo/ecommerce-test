import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/images/Logo_ML.png';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="mercadolibre" />
      </Link>
    </div>
  );
};
