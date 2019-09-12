import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import buildSlug from '../misc/slugify';

import * as actions from '../store/actions/drinks';

import Layout from '../misc/layout';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  setKeyword(e) {
    this.setState({ keyword: e.target.value });
  }

  sendForm() {
    const { dispatch, history } = this.props;
    dispatch(actions.fetchDrinksByName('s', this.state.keyword));
    dispatch(actions.filterDrinks('i', this.state.keyword));

    const formattedKeyword = buildSlug(this.state.keyword);

    history.push(`/results/search/${formattedKeyword}`);
  }

  render() {
    return (
      <Layout className="home">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="searcher">
          <form
            onSubmit={() => this.sendForm()}
          >
            <input
              placeholder="Search by name or ingredient"
              onChange={e => this.setKeyword(e)}
            />
            <button
              className="btn-send"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
        <Link to="/categories" className="link">List categories</Link>
      </Layout>
    );
  }
}

// Set propTypes
Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  dispatch: PropTypes.func,
};


export default connect(null)(Home);
