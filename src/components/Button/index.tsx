import React from 'react';

type ButtonProps = {
  message: string;
};

export const Button = ({ message }: ButtonProps) => (
  <button className="Button Button_width Button_margin">{message}</button>
);
