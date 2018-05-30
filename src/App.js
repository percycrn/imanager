import React, { Component } from 'react';
import MainPage from './components/MainPage';
import LogPage from './components/SignPage';
import { Provider } from './store';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    logged: false,
  };

  log = () => this.setState(state => ({ logged: true }));
  unlog = () => this.setState(state => ({ logged: false }));

  render() {
    return (
      <Provider value={this}>
        {!this.state.logged && this.props.location.pathname !== '/login' && <Redirect to='/login' />}
        <Switch>
          <Route path="/login" component={LogPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Provider>
    );
  }
}

export default withRouter(App);
