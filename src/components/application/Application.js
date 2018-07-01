import React, { Component } from "react";
import { Tabs } from "antd";
import AppOccupation from "./AppOccupation";
import AppStates from "./AppStates";
import { UidContex } from "../../store";

const TabPane = Tabs.TabPane;

class Application extends Component {
  
  render() {
    return (
      <UidContex.Consumer>
        {(uid) => {
          console.log("uid", uid);

          return (
            <div className="App-main">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Mine" key="1">
                  <AppStates />
                </TabPane>
                <TabPane tab="Apply" key="2">
                  <AppOccupation />
                </TabPane>
              </Tabs>
            </div>
          );
        }}
      </UidContex.Consumer>
    );
  }
}

export default Application;
