import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions/index';

import Layout from '../misc/layout';
import CatGroup from '../components/category/catGroup';

class Categories extends Component {
  
  constructor(props) {
    super(props);
    this.filterDrinks = this.filterDrinks.bind(this);
  }

  componentDidMount() {
    this.props.getTypes();
    this.props.getAlc();
  }

  filterDrinks(cat, val) {
    let catKeys = {
      0: 'c',
      1: 'a'
    }
    this.props.onFilterDrinks(catKeys[cat], val);
    this.props.history.push("/results");
  }

  render() {
    let allCat = this.props.categories.map((category, idCat) => {
      let group, item;
      group = Object.keys(category)[0];
      Object.values(category).map(itemCat => {
        return item = itemCat;
      });
      return (
        <CatGroup 
          key={idCat}
          idCat={idCat}
          catName={group}
          items={item}
          itemClicked={this.filterDrinks} />
      );
    });

    return(
      <Layout className="categories">
        <h1>Categories</h1>
        {allCat}
      </Layout>
    );
  }
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
    onFilterDrinks: (cat, val) => dispatch(actions.filterDrinks(cat, val))
  };
};

//Set propTypes
Categories.propTypes = {
  getTypes: PropTypes.func,
  getAlc: PropTypes.func,
  categories: PropTypes.array,
  onFilterDrinks: PropTypes.func,
  history: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
