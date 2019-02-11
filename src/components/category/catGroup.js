import React from 'react';
import CatItem from './catItem';


const catGroup = (props) => {
  let items = props.items.map(item => {
    if(!item.name) return false;
    return (
      <CatItem 
        key={item.id}
        name={item.name} />
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
export default catGroup;
