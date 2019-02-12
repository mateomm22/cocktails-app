import React from 'react';

const catItem = (props) => {
  return (
    <div 
      className="cat-item"
      onClick={props.clicked}>
      <h3>{props.name}</h3>
    </div>
  );
}
export default catItem;
