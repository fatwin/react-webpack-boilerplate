import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
// import Home from './components/Home';
// import Search from './components/Search';
import User from './components/User';
import Product from './components/Product';

export default (
  <Route path="/" component={Home}>
    <Route path="user" component={User} />
    <Route path="product" component={Product} />
    {/*
    <IndexRoute component={Home} />
    <Route path="search" component={Search} />
    <Route path="*" component={NoMatch}/>
    */}
  </Route>
); 