import React from 'react';

type ButtonProps = {
  message: string;
};

export const Button = ({ message }: ButtonProps) => <button>{message}</button>;
