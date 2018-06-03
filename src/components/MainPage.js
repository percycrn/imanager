import React, { Component } from "react";
import { withRouter, Route, Switch, NavLink } from "react-router-dom";
import Activity from "./activity/Activity";
import Account from "./account/Account";
import Application from "./application/Application";
import logo from './logo.svg';

class MainPage extends Component {
  render() {
    // mainpage导航栏
    return (
      <div className="rootin">
        <div className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo"/>
          <NavLink id="activityitem" className="App-sidebaritem" activeClassName="App-sidebaritemactive" to="/activity">
            activity
          </NavLink>
          <NavLink id="applicationitem" className="App-sidebaritem" activeClassName="App-sidebaritemactive" to="/application">
            application
          </NavLink>
          <NavLink id="accountitem" className="App-sidebaritem" activeClassName="App-sidebaritemactive" to="/account">
            account
          </NavLink>
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