import React, { Component } from "react";
import { Select, Button, message } from "antd";
import axios from "axios";
const { Option, OptGroup } = Select;

class AppOccupation extends Component {
  state = {
    tagSelected: "",
  };
  applay = () => {
    axios
      .post(`/users/${this.props.uid}/apps`, {
        tag: this.state.tagSelected,
      })
      .then(({ data }) => {
        if (data.status === 200) {
          message.success("success");
        } else {
          message.error("error");
          console.error(data);
        }
      });
  };

  handleChange = (value) => {
    console.log(`select ${value}`);

    this.setState({ tagSelected: value });
  };
  render() {
    return (
      <div className="mainpage">
        <Select
          // defaultValue="dance"
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <OptGroup label="tutor">
            <Option value="dance">Dance</Option>
            <Option value="sing">Sing</Option>
          </OptGroup>
          <OptGroup label="position">
            <Option value="listenser">Listenser</Option>
            <Option value="volunter">Volunter</Option>
            <Option value="teacher">Teacher</Option>
          </OptGroup>
        </Select>
        <Button type="primary" className="apply-button" onClick={this.applay}>
          Apply!
        </Button>
      </div>
    );
  }
}

export default AppOccupation;
