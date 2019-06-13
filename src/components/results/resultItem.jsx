import React from 'react';
import PropTypes from 'prop-types';

const resultItem = props => (
  <div className="cocktail-item">
    <img src={props.image} className="image" alt="" />
    <div className="text">
      <h2>{props.name}</h2>
    </div>
  </div>
);

// Set propTypes
resultItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default resultItem;
