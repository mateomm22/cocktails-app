import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../misc/layout';

class Results extends Component {
  render() {
    let drinks = this.props.results.map(drink => {
      return drink.name;
    });

    return(
      <Layout className="categories">
        <h1>Results</h1>
        {drinks}
      </Layout>
    );
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    results: state.drinks
  }
}

export default connect(mapStateToProps)(Results);
