import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../misc/layout';
import ResultItem from '../components/results/resultItem';

class Results extends Component {
  render() {
    let drinks = this.props.results.map((drink, key) => {
      return (
        <ResultItem
          key={key}
          drinkId={drink.id} 
          name={drink.name}
          image={drink.image}
          alcohol={drink.alcohol}
          category={drink.category} />
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
  };
}

//Map REDUX state to LOCAL props
const mapStateToProps  = state => {
  return {
    results: state.drinks
  }
}

export default connect(mapStateToProps)(Results);
