import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Activity from "./Activity";
import Account from "./Account";
import Application from "./Application";

class MainPage extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Header</Header>
        <SideBar>
          <div>logo</div>
          <div onClick={() => this.jump("/activity")}>activity</div>
          <div onClick={() => this.jump("/application")}>application</div>
          <div onClick={() => this.jump("/account")}>account</div>
        </SideBar>
        <Display>
          <Route path="/activity" component={Activity} Activity />
          <Route path="/account" component={Account} Account />
          <Route path="/application" component={Application} Application />
        </Display>
      </Wrapper>
    );
  }

  jump(path) {
    this.props.history.push(path);
  }
}

export default MainPage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "sidebar header"
    "sidebar route-display";
  height: 100vh;
  box-sizing: border-box;
`;
const Header = styled.div`
  grid-area: header;
`;

const SideBar = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;
const Display = styled(Switch)`
  grid-area: route-display;
`;
