import React, { Component } from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import Activity from './Activity';
import Account from './Account';
import Application from './Application';
import { Menu, Dropdown, Icon } from 'antd';
import { Consumer } from '../store';

class MainPage extends Component {
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
          <Consumer>
            {payload => <div onClick={() => payload.unlog()}>logout</div>}
          </Consumer>
        </Menu.Item>
      </Menu>
    );
    // mainpage导航栏
    return (
      <div>
        <div className="App-header">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              Welcome to activity manager! <Icon type="down" />
            </a>
          </Dropdown>
        </div>

        <div className="App-sidebar">
          <div>logo</div>
          <NavLink className="App-sidebaritem" to="/activity">
            activity
          </NavLink>
          <NavLink className="App-sidebaritem" to="/application">
            application
          </NavLink>
          <NavLink className="App-sidebaritem" to="/account">
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

export default MainPage;
