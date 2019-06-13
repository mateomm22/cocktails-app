import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  const header = props.className !== 'home' ? <header>Logo</header> : null;

  return (
    <div className={props.className}>
      {header}
      <div className="container">
        {props.children}
      </div>
      <footer>
        2019
      </footer>
    </div>
  );
};

// Set propTypes
Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
