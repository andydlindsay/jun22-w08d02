import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>
      </nav>

      <Switch>
        <Route path="/products" component={Products}/>
        <Route path="/about">
          <h2>About page</h2>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
