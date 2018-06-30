import React, { Component } from "react";
import { withRouter, Route, Switch, NavLink } from "react-router-dom";
import { Icon } from "antd";
import Activity from "./activity/Activity";
import Account from "./account/Account";
import Application from "./application/Application";
import Header from "./Header";

import logo from "./logo.svg";

const iconStyle = {
  fontSize: 40,
  color: "#ffffff",
  marginBottom: 10,
};

const SideBarItem = ({ to, text, icon }) => (
  <NavLink
    id="activityitem"
    className="App-sidebaritem"
    activeClassName="App-sidebaritemactive"
    to={to}
  >
    <Icon type={icon} style={iconStyle} />
    <div>{text}</div>
  </NavLink>
);

class MainPage extends Component {
  render() {
    // mainpage导航栏
    return (
      <div className="rootin">
        <Header
          className="App-header"
          handelSignOut={this.props.handelSignOut}
        />
        <div className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <SideBarItem to="/activity" text="activity" icon="schedule" />
          <SideBarItem to="/application" text="application" icon="solution" />
          <SideBarItem to="/account" text="activity" icon="user" />
        </div>
        <Switch>
          <Route path="/activity" component={Activity} Activity />
          <Route path="/account" component={Account} Account />
          <Route path="/application" component={Application} Application />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainPage);
