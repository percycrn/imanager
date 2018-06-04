import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Consumer } from '../store';

const menu = (
  <Consumer>
    {payload => (
      <Menu>
        <Menu.Item>profile</Menu.Item>
        <Menu.Item onClick={payload.unlog}>logout</Menu.Item>
      </Menu>
    )}
  </Consumer>
);

export default () => (
  <div className="App-header">
    <Dropdown overlay={menu}>
      <span className="ant-dropdown-link">
        Welcome to activity manager! <Icon type="down" />
      </span>
    </Dropdown>
  </div>
);
