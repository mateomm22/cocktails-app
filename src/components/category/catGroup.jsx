import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import slugify from 'slugify';

import CatItem from './catItem';


const catGroup = (props) => {
  const items = props.items.map((item) => {
    if (!item.name) return false;

    const buildSlug = string => slugify(string, {
      replacement: '_',
      lower: true,
    });

    const fixedCatName = buildSlug(props.catName);
    const fixedName = buildSlug(item.name);

    return (
      <Link
        key={item.id}
        to={`/results/${fixedCatName}/${fixedName}`}
      >
        <CatItem
          name={item.name}
          clicked={() => props.itemClicked(props.idCat, item.name)}
        />
      </Link>
    );
  });

  return (
    <div className="cat-group">
      <h4>{props.catName}</h4>
      <div className="grid grid-4">
        {items}
      </div>
    </div>
  );
};

catGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  idCat: PropTypes.number,
  catName: PropTypes.string,
  itemClicked: PropTypes.func,
};

export default catGroup;
