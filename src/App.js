import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from './containers/categories';
import Detail from './containers/detail';
import Home from './containers/home';
import Results from './containers/results';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/results" component={Results} />
        <Route path="/categories" component={Categories} />
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}

export default App;
