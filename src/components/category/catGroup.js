import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import slugify from 'slugify';

import CatItem from './catItem';


const catGroup = (props) => {
  let items = props.items.map(item => {
    if(!item.name) return false;

    let buildSlug  = (string) => {
      return  slugify(string, {
        replacement: '_',
        lower: true
      });
    }

    let fixedCatName = buildSlug(props.catName);
    let fixedName = buildSlug(item.name);
    
    return (
      <Link
        key={item.id}
        to={`/results/${fixedCatName}/${fixedName}`} >
        <CatItem 
          name={item.name} />
      </Link>
    )
  });
  return (
    <div className="cat-group">
      <h4>{props.catName}</h4>
      <div className="grid grid-4">
        {items}
      </div>
    </div>
  );
}

catGroup.propTypes = {
  items: PropTypes.array,
  idCat: PropTypes.number,
  catName: PropTypes.string,
  itemClicked: PropTypes.func
}

export default catGroup;
