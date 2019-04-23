import React, { Component } from 'react';
import axios from 'axios';
import Pager from './Pager';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], count: 0, idx: +props.match.params.idx || 0 };
  }
  componentDidMount() {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${this.state.idx}`)
      .then(response => this.setState(response.data));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.idx !== this.props.match.params.idx) {
      this.setLocalState(+this.props.match.params.idx);
    }
  }

  setLocalState = idx => {
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${idx}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          users: data.users,
          count: data.count,
          idx: idx,
        });
      });
  };

  render() {
    // console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <Pager
          idx={this.state.idx}
          history={this.props.history}
          count={this.state.count}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.middleName}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
