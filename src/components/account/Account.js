import React, { Component } from "react";
import { Tabs } from "antd";
import Profile from "./Profile";
import { UidContex } from "../../store";

const TabPane = Tabs.TabPane;

class Account extends Component {
  render() {
    return (
      <UidContex.Consumer>
        {(uid) => {
          console.log("uid", uid);

          return (
            <div className="App-main">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Mine" key="1">
                  <Profile uid={uid}/>
                </TabPane>
              </Tabs>
            </div>
          );
        }}
      </UidContex.Consumer>
    );
  }
}

export default Account;
