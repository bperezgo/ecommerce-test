import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useHistory } from 'react-router-dom';
import searchLogo from '@assets/images/ic_Search.png';

export const Searcher = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  const handleClick = () => {
    history.push(`/items?search${value}`);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setValue(value);
      handleClick();
    }
  };

  return (
    <div className="Searcher__container">
      <input
        type="text"
        className="Searcher__input"
        placeholder="Nunca dejes de buscar"
        value={value}
        onChange={handleChange}
        onKeyPressCapture={handleEnterKey}
      />
      <div className="Searcher__lens" onClick={handleClick}>
        <img src={searchLogo} alt="lens" />
      </div>
    </div>
  );
};
