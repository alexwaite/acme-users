import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    );
  }
}
