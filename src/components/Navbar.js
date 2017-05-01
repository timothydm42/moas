import React, {Component} from 'react';
import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav-list">
          <li className="nav-list-item">Thing 1</li>
          <li className="nav-list-item">Thing 2</li>
          <li className="nav-list-item">Thing 3</li>
        </ul>
      </div>
    )
  }
}
