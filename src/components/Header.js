import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

export default (props) => (
  <div className="App-header">
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={props.handelSignOut}>logout</Menu.Item>
        </Menu>
      }
    >
      <span className="ant-dropdown-link">
        Welcome to activity manager! <Icon type="down" />
      </span>
    </Dropdown>
  </div>
);
