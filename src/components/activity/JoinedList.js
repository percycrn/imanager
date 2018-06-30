import React, { Component } from "react";
import { List } from "antd";
import axios from "axios";
import ActivityCard from "./CardJoined";

class ActivityRecord extends Component {
  state = {
    data: [],
  };

  allActs() {
    axios
      .get(`/users/${this.props.uid}/acts`, {
        params: { type: "joined" },
      })
      .then(({ data }) => {
        this.setState({ data: data });
      });
  }

  componentWillMount() {
    this.allActs();
  }
  render() {
    return (
      <div className="mainpage">
        <List
          className="demo-loadmore-list"
          size="large"
          itemLayout="horizontal"
          dataSource={this.state.data}
          pagination={{
            position: "bottom",
            pageSize: 4,
            size: "large",
          }}
          renderItem={(item) => (
            <ActivityCard
              data={item}
              uid={this.props.uid}
              handleRefresh={this.allActs.bind(this)}
            />
          )}
        />
      </div>
    );
  }
}

export default ActivityRecord;
