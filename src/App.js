import React, { Component } from "react";
import MainPage from "./components/MainPage";
import SignPage from "./components/signPage/SignPage";
import { withRouter } from "react-router-dom";
import { UidContex } from "./store";

class App extends Component {
  state = {
    isSignIn: false,
    uid: 2,
  };

  signIn = (uid) => this.setState({ isSignIn: true, uid });
  signOut = () => this.setState({ isSignIn: false });

  render() {
    if (this.state.isSignIn) {
      return (
        <UidContex.Provider value={this.state.uid}>
          <MainPage handelSignOut={this.signOut} />
        </UidContex.Provider>
      );
    } else {
      return <SignPage handelSignIn={this.signIn} />;
    }
  }
}
export default withRouter(App);
