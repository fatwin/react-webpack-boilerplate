import * as React from 'react'
import { Link } from 'react-router'

export default class ItemList extends React.Component {
  render() {
    const { items } = this.props
    
    return (
      <div>
        <h1>A list of items.</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}