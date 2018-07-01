import React, { Component } from "react";
import { Tabs } from "antd";
import UnjoinedList from "./UnjoinedList";
import JoinedList from "./JoinedList";
import { UidContex } from "../../store";

const { TabPane } = Tabs;
class Activity extends Component {
  unjoinedRef = React.createRef();
  joinedRef = React.createRef();

  handleChange = (key) => {
    switch (key) {
      case "1":
        this.unjoinedRef.current.allActs();
        break;
      case "2":
        this.joinedRef.current.allActs();
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
              <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                <TabPane tab="join activity" key="1" forceRender>
                  <UnjoinedList ref={this.unjoinedRef} uid={uid} />
                </TabPane>
                <TabPane tab="My Activity" key="2" forceRender>
                  <JoinedList ref={this.joinedRef} uid={uid} />
                </TabPane>
              </Tabs>
            </div>
          );
        }}
      </UidContex.Consumer>
    );
  }
}

export default Activity;
