/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionTypes from '../store/actions/actionTypes';
import * as actions from '../store/actions/index';

import Layout from '../misc/layout';
import CatGroup from '../components/category/catGroup';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.filterDrinks = this.filterDrinks.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchCategory('c', actionTypes.GET_DRINK_TYPES));
    dispatch(actions.fetchCategory('a', actionTypes.GET_ALC_LEVEL));
  }

  filterDrinks(cat, val) {
    const { dispatch } = this.props;
    const catKeys = {
      0: 'c',
      1: 'a',
    };
    dispatch(actions.filterDrinks(catKeys[cat], val));
    this.props.history.push('/results');
  }

  render() {
    const allCat = this.props.categories.map((category, idCat) => {
      let item;
      const group = Object.keys(category)[0];
      Object.values(category).map(itemCat => item = itemCat);
      return (
        <CatGroup
          key={idCat}
          idCat={idCat}
          catName={group}
          items={item}
          itemClicked={this.filterDrinks}
        />
      );
    });

    return (
      <Layout className="categories">
        <h1>Categories</h1>
        {allCat}
      </Layout>
    );
  }
}

// Map REDUX state to LOCAL props
const mapStateToProps = state => ({
  categories: [
    { 'Drink types': state.categoriesReducer.drinkTypes },
    { 'Alcohol level': state.categoriesReducer.alcohol },
  ],
});

// Set propTypes
Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      'Drink types': PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
      'Alcohol level': PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }),
  ),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Categories);
