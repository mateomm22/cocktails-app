import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions/index'

import Layout from '../misc/layout';
import ResultItem from '../components/results/resultItem';

class Results extends Component {
  componentWillUnmount() {
    this.props.clearState();
  }
  
  render() {
    
    let drinks = this.props.results.map((drink, key) => {
      return (
        <ResultItem
          key={key}
          drinkId={drink.id} 
          name={drink.name}
          image={drink.image}/>
      );
    });

    return(
      <Layout className="results">
        <span className="title">Results</span>
        <div className="grid grid-4">
        {drinks}
        </div>
      </Layout>
    );
  }
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    results: state.drinksReducer.drinks,
    loading: state.drinksReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResults: (cat, name) => dispatch(actions.filterDrinks(cat, name)),
    clearState: () => dispatch(actions.clearState())
  }
}

//Set propTypes
Results.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  clearState: PropTypes.func,
  getResults: PropTypes.func,
  results: PropTypes.array,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
