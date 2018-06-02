import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from "antd";

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
              <Icon type="solution" />Application Occupation
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
