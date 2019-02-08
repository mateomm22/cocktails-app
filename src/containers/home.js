import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import * as actions from '../store/actions/drinks';

import Layout from '../misc/layout';

class Home extends Component {
  
  state = {
    needle: ''
  }

  setNeedle = (e) => {
    this.setState({needle: e.target.value})
  }

  sendForm = (keyword) => {
    this.props.searchHome(keyword);
    this.props.history.push("/results");
  }

  render() {
    return(
      <Layout className="home">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="searcher">
          <input 
            placeholder="Search by name or ingredient" 
            onChange={this.setNeedle} />
          <button 
            className="btn-send"
            onClick={() => this.sendForm(this.state.needle)}>
            Search
          </button>
        </div>
        <Link to="/categories" className="link">List categories</Link>
      </Layout>
    );
  };
}

// const mapStateToProps = state => {
//   return {
//     ings: state.burgerBuilder.ingredients,
//     price: state.burgerBuilder.totalPrice,
//     error: state.burgerBuilder.error
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    searchHome: needle => dispatch(actions.fetchDrinksByName(needle)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
