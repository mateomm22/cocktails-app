import React from 'react';

const Layout = (props) => {
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

export default Layout;
