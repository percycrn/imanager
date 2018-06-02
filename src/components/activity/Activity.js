import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Route, Switch, NavLink } from "react-router-dom";
import ActivityList from "./ActivityList";
import ActivityRecord from "./ActivityRecord";
import ActivityHistory from "./ActivityHistory";

class Activity extends Component {
  state = {
    current: "list"
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
          <h1>Manage Your Activities</h1>
        </div>
        {/* navigation */}
        <div className="App-navigation">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="list">
              <NavLink to="/activity/list">Activity List</NavLink>
            </Menu.Item>
            <Menu.Item key="record">
              <NavLink to="/activity/record">Activity Record</NavLink>
            </Menu.Item>
            <Menu.Item key="history">
              <NavLink to="/activity/history">Activity History</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route path="/activity/list" component={ActivityList} ActivityList />
          <Route
            path="/activity/record"
            component={ActivityRecord}
            ActivityList
          />
          <Route
            path="/activity/history"
            component={ActivityHistory}
            ActivityList
          />
        </Switch>
      </div>
    );
  }
}

export default Activity;
