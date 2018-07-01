import React, { Component } from "react";
import { List, Col, Button, message } from "antd";
import axios from "axios";

class AppList extends Component {
  state = {
    data: [],
  };

  allActs = () => {
    axios.get(`/users/${this.props.uid}/apps`).then(({ data }) => {
      this.setState({ data: data });
    });
  };

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
            <ListItem
              data={item}
              uid={this.props.uid}
              handleRefresh={this.allActs}
            />
          )}
        />
      </div>
    );
  }
}

class ListItem extends Component {
  handelCancel = () => {
    axios
      .delete(`/users/${this.props.uid}/apps/${this.props.data.apid}`)
      .then(({ data }) => {
        if (data.status === 200) {
          message.success("success");
        } else {
          message.error("error");
          console.error(data);
        }
        this.props.handleRefresh();
      });
  };
  render() {
    const data = this.props.data;
    return (
      <List.Item
        size="large"
        actions={[
          <Button type="primary" onClick={this.handelCancel}>
            cancel
          </Button>,
        ]}
      >
        <Col span={6}>tag:{data.tag}</Col>
        <Col span={6}>status:{data.status}</Col>
      </List.Item>
    );
  }
}

export default AppList;
