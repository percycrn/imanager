import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from "antd";

class Activity extends Component {
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
    return (
      <div>
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
            <Menu.Item key="mail">
              <Icon type="mail" />Activity
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />Activity Record
            </Menu.Item>
            <Menu.Item key="alipay">
              <Icon type="appstore" />History Record
            </Menu.Item>
          </Menu>
        </div>

      </div>
    );
  }
}

export default Activity;
