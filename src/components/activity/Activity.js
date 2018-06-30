import React, { Component } from "react";
import { Tabs } from "antd";
import ActivityList from "./ActivityList";
import ActivityRecord from "./ActivityRecord";
import { UidContex } from "../../store";

const { TabPane } = Tabs;
class Activity extends Component {
  unjoinedRef = React.createRef();
  joinedRef = React.createRef();

  handleChange = (key) => {
    switch (key) {
      case "1":
        // console.log(this.unjoinedRef);

        this.unjoinedRef.current.allActs();
        break;
      case "2":
        this.joinedRef.current.allActs();
        // console.log(this.joinedRef);

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
              <Tabs
                defaultActiveKey="1"
                size="large"
                onChange={this.handleChange}
              >
                <TabPane tab="join activity" key="1" forceRender>
                  <ActivityList ref={this.unjoinedRef} uid={uid} />
                </TabPane>
                <TabPane tab="My Activity" key="2" forceRender>
                  <ActivityRecord ref={this.joinedRef} uid={uid} />
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
