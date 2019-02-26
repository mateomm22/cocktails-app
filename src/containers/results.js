import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions/index'

import Layout from '../misc/layout';
import ResultItem from '../components/results/resultItem';

class Results extends Component {
  
  componentWillUnmount(){
    this.props.clearState();
  }
  
  render() {

    const drinks = this.props.results.map((drink, key) => 
      <ResultItem
        key={key}
        drinkId={drink.id} 
        name={drink.name}
        image={drink.image}
        alcohol={drink.alcohol}
        category={drink.category} />
    );

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
    clearState: () => dispatch(actions.clearState()),
  }
}

//Set propTypes
Results.propTypes = {
  results: PropTypes.array,
  history: PropTypes.any,
  clearState: PropTypes.func,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
