import React from 'react';

type BreadcrumbProps = {
  categories: string[];
};

export const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <div className="Breadcrumb__block">
      <p>{categories.join(' > ')}</p>
    </div>
  );
};
