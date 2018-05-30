import React, { Component } from "react";
import MainPage from "./components/MainPage";
import LogPage from "./components/SignPage";
import { Provider } from "./store";

class App extends Component {
  state = {
    logged: false
  };
  log = () => this.setState(state => ({ logged: true }));

  render() {
    return (
      // <Provider value={this.log}>
      //   {this.state.logged ? <MainPage /> : <LogPage />}
      // </Provider>
      <MainPage />
    );
  }
}

export default App;
