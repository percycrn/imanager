import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

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
    return (
      <div>
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
              <Icon type="mail" />Profile
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Account;
