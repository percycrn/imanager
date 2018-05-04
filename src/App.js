import React, { Component } from "react";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return <Route path="/" component={MainPage}/>;
  }
}

export default App;
