import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { breadcrumbCategoryLink } from '../../utils/front';
import context from '../../context';

type BreadcrumbProps = {
  categories: string[];
};

export const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  const history = useHistory();
  const globalState = useContext(context);
  const handleClick = (category: string) => {
    globalState.search = true;
    history.push(breadcrumbCategoryLink(category));
  };
  return (
    <div className="Breadcrumb__block">
      {categories.map((category, idx) => {
        const length = categories.length;
        let decorator = false;
        if (idx < length - 1) decorator = true;
        return (
          <Fragment key={idx}>
            <span
              className="Breadcrumb__span"
              onClick={() => handleClick(category)}
            >
              {category}
            </span>
            {decorator && <span>{' > '}</span>}
          </Fragment>
        );
      })}
    </div>
  );
};
