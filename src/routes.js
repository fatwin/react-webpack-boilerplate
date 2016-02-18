import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Item from './components/Item'
import ItemList from './components/ItemList'
import User from './components/User'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="items" component={ItemList} />
    <Route path="items/:id" component={Item} />
    <Route path="user" component={User} />
  </Route>
)