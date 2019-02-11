import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Layout from '../misc/layout';
import CatItem from "../components/category/catItem";

class Categories extends Component {

  
  componentDidMount() {
    this.props.getTypes();
    this.props.getAlc();
  }
  
  render() {
    //Watch this on the Devtools: 
    // console.log(this.props.alcohol);

    let allTypes = this.props.types.map(type => {
      return (
        <CatItem 
          key={type.id}
          name={type.name} />
      )
    });

    let allAlc = this.props.alcohol.map(type => {
      if(!type.name) return;
      return (
        <CatItem 
          key={type.id}
          name={type.name} />
      )
    });

    return(
      <Layout className="categories">
        <h1>Categories</h1>
        <div className="cat-group">
          <h4>Drink types</h4>
          <div className="grid grid-4">
            {allTypes}
          </div>
        </div>
        <div className="cat-group">
          <h4>Alcohol level</h4>
          <div className="grid grid-4">
            {allAlc}
          </div>
        </div>
      </Layout>
    );
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    types: state.drinkTypes,
    alcohol: state.alcohol
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTypes: () => dispatch(actions.fetchDrinkTypes()),
    getAlc: () => dispatch(actions.fetchAlcLevel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
