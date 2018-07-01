import React, { Component } from "react";
import { Tabs } from "antd";
import Profile from "./Profile";
const TabPane = Tabs.TabPane;

class Account extends Component {
  render() {
    return (
      <div className="App-main">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Mine" key="1">
            <Profile />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Account;
