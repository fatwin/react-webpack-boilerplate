import * as React from 'react'
import { Link } from 'react-router'
import ItemList from './ItemList'

var items = [
  {
    id: 1,
    name: 'item1'
  },
  {
    id: 2,
    name: 'item2'
  }
]

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user">User</Link></li>
        </ul>
        {this.props.children || <ItemList items={items} />}
      </div>
    )
  }
}