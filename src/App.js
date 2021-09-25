import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path='/products/:productId' exact component={ProductDetail} />
        <Route>404 Not found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
