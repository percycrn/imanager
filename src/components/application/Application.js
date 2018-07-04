import React, { Component } from "react";
import { Tabs } from "antd";
import AppOccupation from "./AppOccupation";
import AppStates from "./AppStates";
import { UidContex } from "../../store";

const TabPane = Tabs.TabPane;

class Application extends Component {
  applications = React.createRef();

  handleRefresh = (key) => {
    switch (key) {
      case "1":
        this.applications.current.allApps();
        break;
      case "2":
        break;
      default:
        console.error("wrong key");
    }
  };
  render() {
    return (
      <UidContex.Consumer>
        {(uid) => {
          console.log("uid", uid);

          return (
            <div className="App-main">
              <Tabs defaultActiveKey="1" onChange={this.handleRefresh}>
                <TabPane tab="Mine" key="1">
                  <AppStates ref={this.applications} uid={uid} />
                </TabPane>
                <TabPane tab="Apply" key="2">
                  <AppOccupation uid={uid} />
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
