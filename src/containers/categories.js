import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../misc/layout';
import CatGroup from '../components/category/catGroup';

class Categories extends Component {
  render() {
    let catGroups = this.props.categories.map((category, idCat) => {
      let group, items;
      group = Object.keys(category);
      Object.values(category).map(itemCat => items = itemCat);
      return (
        <CatGroup 
          key={idCat}
          catName={group}
          items={items} />
      );
    });

    return(
      <Layout className="categories">
        <h1>Categories</h1>
        {catGroups}
      </Layout>
    );
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    categories: [
      {Types: state.drinkTypes},
      {Alcohol: state.alcohol}
    ]
  }
}

export default connect(mapStateToProps)(Categories);
