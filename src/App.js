import React, { Component } from 'react';
import Nav from './Nav';
import Users from './Users';
import { HashRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <h1>Acme Users</h1>
        <Nav />
        <Route exact path="/" render={() => <h4>You are home</h4>} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:idx" component={Users} />
      </HashRouter>
    );
  }
}
