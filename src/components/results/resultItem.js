import React from 'react';

const resultItem = (props) => {
  return (
    <div className="cocktail-item">
      <img src={props.image} className="image" alt="" />
      <div className="text">
        <h2>{props.name}</h2>
        <span>{props.category} / {props.alcohol}</span>
      </div>
    </div>
  );
}
export default resultItem;
