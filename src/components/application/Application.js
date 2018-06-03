import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Route, Switch, NavLink } from "react-router-dom";
import AppOccupation from "./AppOccupation"
import AppStates from "./AppStates"

class Application extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const menu = (
      // header
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.baidu.com/"
          >
            profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.qq.com/"
          >
            logout
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="rightpage">
        {/* header */}
        <div className="App-header">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              Welcome to activity manager! <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        {/* title */}
        <div className="App-title">
          <h1>Manage Your Applications</h1>
        </div>
        {/* navigation */}
        <div className="App-navigation">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <NavLink to="/application/occupation">Application Occupation</NavLink>
            </Menu.Item>
            <Menu.Item key="app">
              <NavLink to="/application/states">Application States</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route path="/application/occupation" component={AppOccupation} AppOccupation />
          <Route
            path="/application/states"
            component={AppStates}
            AppStates
          />
        </Switch>
      </div>
    );
  }
}

export default Application;
