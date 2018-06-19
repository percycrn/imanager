import React, { Component } from 'react';
import MainPage from './components/MainPage';
import SignPage from './components/signPage/SignPage';
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    isSignIn: false,
  };

  signIn = () => this.setState({ isSignIn: true });
  signOut = () => this.setState({ isSignIn: false });

  render() {
    if (this.state.isSignIn) {
      return <MainPage handelSignOut={this.signOut} />;
    } else {
      return <SignPage handelSignIn={this.signIn} />;
    }
  }
}
export default withRouter(App);
