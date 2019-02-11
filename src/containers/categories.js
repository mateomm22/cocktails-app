import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Layout from '../misc/layout';
import CatGroup from "../components/category/catGroup";

class Categories extends Component {

  
  componentDidMount() {
    this.props.getTypes();
    this.props.getAlc();
  }
  
  render() {
    //Watch this on the Devtools: 
    // console.log(this.props.alcohol);

    let allCat = this.props.categories.map((category, idCat) => {
      let group, item;
      group = Object.keys(category);
      Object.values(category).map(itemCat => {
        return item = itemCat;
      });
      return (
        <CatGroup 
          key={idCat}
          catName={group}
          items={item} />
      );
    });

    return(
      <Layout className="categories">
        <h1>Categories</h1>
        {allCat}
      </Layout>
    );
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    categories: [
      {'Drink types': state.drinkTypes},
      {'Alcohol level': state.alcohol}
    ]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTypes: () => dispatch(actions.fetchDrinkTypes()),
    getAlc: () => dispatch(actions.fetchAlcLevel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
