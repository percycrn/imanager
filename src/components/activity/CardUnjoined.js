import React, { Component } from "react";
import { Modal, List, Button, message, Select } from "antd";
import axios from "axios";
const { Option } = Select;

class ActivityCard extends Component {
  state = {
    visible: false,
    tagSelected: "",
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleClose = () => {
    this.setState({
      visible: false,
      tagSelected: "",
    });
  };
  handleChange = (value) => {
    this.setState({ tagSelected: value });
  };
  handleJoin = () => {
    if (this.state.tagSelected === "") {
      message.warn("need tag");
      return
    }
    axios
      .post(
        `/users/${this.props.uid}/acts/${this.props.data.aid}/tags/${
          this.state.tagSelected
        }`
      )
      .then(({ data }) => {
        if (data.status === 200) {
          message.success("success");
          this.handleClose();
        } else {
          message.error("error");
          this.handleClose();
          console.error(data);
        }
        this.props.handleRefresh();
      });
  };
  render() {
    const data = this.props.data;
    return (
      <List.Item
        actions={[
          <Button type="primary" onClick={this.showModal}>
            more
          </Button>,
        ]}
      >
        <List.Item.Meta title={data.name} description={data.startTime} />
        <Modal
          visible={this.state.visible}
          onCancel={this.handleClose}
          destroyOnClose
          footer={[
            <Button type="primary" key="join" onClick={this.handleJoin}>
              join
            </Button>,
          ]}
        >
          <div>
            <h3>name {data.name}</h3>
            <p>address {data.address}</p>
            <p>startTime {data.startTime}</p>
            <p>endTime {data.endTime}</p>
            <p>now {data.now}</p>
            <p>max {data.max}</p>
            <p>min {data.min}</p>
            <p>summary {data.summary}</p>
            <p>tag {data.tag}</p>
            <p>createTime {data.createTime}</p>
            <p>state {data.state}</p>
          </div>

          <Select style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="listenser">Listenser</Option>
            <Option value="volunter">Volunter</Option>
            <Option value="teacher">Teacher</Option>
          </Select>
        </Modal>
      </List.Item>
    );
  }
}

export default ActivityCard;
