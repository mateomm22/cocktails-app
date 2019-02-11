import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Layout from '../misc/layout';

class Categories extends Component {

  
  componentDidMount() {
    this.props.getTypes();
  }
  
  render() {
    //Watch this on the Devtools: 
    console.log(this.props.types);

    return(
      <Layout className="categories">
        <h1>Categories</h1>
      </Layout>
    );
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    types: state.drinkTypes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTypes: () => dispatch(actions.fetchDrinkTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
