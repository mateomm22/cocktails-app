import React from 'react';
import PropTypes from 'prop-types';

const layout = (props) => {
  let header = props.className !== 'home' ? <header>Logo</header> : null;

  return(
    <div className={props.className}>
      {header}
      <div className='container'>
        {props.children}
      </div>
      <footer>
        2019
      </footer>
    </div>
  )
}

//Set propTypes
layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default layout;
