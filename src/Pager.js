import React, { Component } from 'react';

export default class Pager extends Component {
  navigate = value => {
    if (value >= 0) {
      this.props.history.push(`/users/${value}`);
    }
  };

  render() {
    return (
      <div>
        <p>
          {this.props.count} results. Page {this.props.idx + 1} of{' '}
          {Math.ceil(this.props.count / 50)}
        </p>

        <div className="btn-group">
          <button
            className="btn btn-info"
            disabled={this.props.idx > 0 ? false : true}
            onClick={() => this.navigate(0)}
          >
            First
          </button>
          <button
            className="btn btn-info"
            disabled={this.props.idx > 0 ? false : true}
            onClick={() => this.navigate(this.props.idx - 1)}
          >
            Prev
          </button>
          <a className="btn btn-primary" href={`#/users/${this.props.idx}`}>
            {this.props.idx + 1}
          </a>
          <button
            className="btn btn-info"
            onClick={() => this.navigate(this.props.idx + 1)}
            disabled={
              this.props.idx + 1 === Math.ceil(this.props.count / 50)
                ? true
                : false
            }
          >
            Next
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.navigate(Math.ceil(this.props.count / 50) - 1)}
            disabled={
              this.props.idx + 1 === Math.ceil(this.props.count / 50)
                ? true
                : false
            }
          >
            Last
          </button>
        </div>
      </div>
    );
  }
}
