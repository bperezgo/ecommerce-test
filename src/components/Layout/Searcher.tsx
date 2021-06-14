import React, { useState, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import searchLogo from '@assets/images/ic_Search.png';
import context from '../../context';

export const Searcher = () => {
  const globalState = useContext(context);
  const history = useHistory();
  const [value, setValue] = useState('');
  const handleClick = () => {
    globalState.search = true;
    history.push(`/items?search=${value}`);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
    globalState.searchValue = value;
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
