import React, { ReactNode } from 'react';
import { Logo } from './Logo';
import { Searcher } from './Searcher';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="Layout__container Layout__container-height">
        <Logo />
        <Searcher />
      </div>
      {children}
    </>
  );
};
