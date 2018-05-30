import React, { Component } from 'react';
import { Consumer } from '../store';

class LogPage extends Component {
  render() {
    return (
      <Consumer>
        {payload => <div onClick={() => this.doLogin(payload)}>login</div>}
      </Consumer>
    );
  }
  doLogin(payload) {
    payload.log();
    this.props.history.push('/activity');
  }
}

export default LogPage;
