import React from 'react';
import PropTypes from 'prop-types';

const catItem = props => (
  <div
    className="cat-item"
    onClick={props.clicked}>
    <h3>{props.name}</h3>
  </div>
);

catItem.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
};

export default catItem;
