import React from 'react';
import PropTypes from 'prop-types';

import CatItem from './catItem';


const catGroup = (props) => {
  let items = props.items.map(item => {
    if(!item.name) return false;
    return (
      <CatItem 
        key={item.id}
        name={item.name}
        clicked={() => props.itemClicked(props.idCat,item.name)} />
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
