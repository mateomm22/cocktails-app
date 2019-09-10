/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions/index';

import Layout from '../misc/layout';
import ResultItem from '../components/results/resultItem';

class Results extends Component {
  /**
   * Get the params in the url and perform the petition
   * to the API with that parameters
   */
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: {
          category,
          name,
        },
      },
    } = this.props;

    switch (category) {
      case 'search':
        dispatch(actions.fetchDrinksByName('s', name));
        break;
      case 'alcohol_level':
        dispatch(actions.filterDrinks('a', name));
        break;
      case 'drink_types':
        dispatch(actions.filterDrinks('c', name));
        break;
      default:
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actions.clearState());
  }

  render() {
    const drinks = this.props.results.map((drink, key) => (
      <ResultItem
        key={key}
        drinkId={drink.id}
        name={drink.name}
        image={drink.image}
        alcohol={drink.alcohol}
        category={drink.category}
      />
    ));

    return (
      <Layout className="results">
        <span className="title">Results</span>
        <div className="grid grid-4">
          {drinks}
        </div>
      </Layout>
    );
  }
}

// Map REDUX state to LOCAL props
const mapStateToProps = state => ({
  results: state.drinksReducer.drinks,
  loading: state.drinksReducer.loading,
});

// Set propTypes
Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string),
  ),
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Results);
