import React, { Component } from "react";
import { Select, Button } from "antd";
const { Option, OptGroup } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

class AppOccupation extends Component {
  render() {
    return (
      <div className="mainpage">
        {/* mainpage */}
        <Select
          defaultValue="dance"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <OptGroup label="tutor">
            <Option value="dance">Dance</Option>
            <Option value="sing">Sing</Option>
          </OptGroup>
          <OptGroup label="volunter">
            <Option value="volunter">Volunter</Option>
          </OptGroup>
        </Select>
        <Button type="primary" className="apply-button">Apply!</Button>
      </div>
    );
  }
}

export default AppOccupation;
