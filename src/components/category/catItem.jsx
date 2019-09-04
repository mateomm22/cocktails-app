/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const catItem = props => (
  <div
    className="cat-item"
    onClick={props.clicked}
    role="button"
    tabIndex="0"
  >
    <h3>{props.name}</h3>
  </div>
);

catItem.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
};

export default catItem;
