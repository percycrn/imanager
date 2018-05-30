import React, { Component } from 'react';
import { Menu, Icon } from "antd";

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
    return (
      <div>
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
              <Icon type="mail" />Application Occupation
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />Application Status
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Application;
