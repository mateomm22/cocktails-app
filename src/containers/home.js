import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../misc/layout';

class Home extends Component {
  render() {
    return(
      <Layout className="home">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="searcher">
          <input 
            placeholder="Search by name or ingredient" />
          <button className="btn-send">
            Search
          </button>
        </div>
        <Link to="/categories" className="link">List categories</Link>
      </Layout>
    );
  }
}

export default Home;
