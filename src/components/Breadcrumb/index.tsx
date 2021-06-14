import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { breadcrumbCategoryLink } from '../../utils/front';

type BreadcrumbProps = {
  categories: string[];
};

export const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <div className="Breadcrumb__block">
      {categories.map((category, idx) => {
        const length = categories.length;
        let decorator = false;
        if (idx < length - 1) decorator = true;
        return (
          <Fragment key={idx}>
            <Link to={breadcrumbCategoryLink(category)}>
              <span>{category}</span>
            </Link>
            {decorator && <span>{' > '}</span>}
          </Fragment>
        );
      })}
    </div>
  );
};
