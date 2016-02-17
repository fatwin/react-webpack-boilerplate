import * as React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Hello, this is home.
        <ul>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}