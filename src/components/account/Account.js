import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Switch, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

class Account extends Component {
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
          <h1>Manage Your Account</h1>
        </div>
        {/* navigation */}
        <div className="App-navigation">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <NavLink to="/account/profile">Profile</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route path="/account/profile" component={Profile} Profile />
        </Switch>
      </div>
    );
  }
}

export default Account;
