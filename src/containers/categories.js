import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../misc/layout';

class Categories extends Component {
  render() {
    return(
      <Layout className="categories">
        <h1>Categories</h1>
      </Layout>
    );
  };
}

export default Categories;
