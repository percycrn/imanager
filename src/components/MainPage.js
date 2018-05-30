import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch ,BrowserHistory,NavLink} from "react-router-dom";
import Activity from "./Activity";
import Account from "./Account";
import Application from "./Application";
import { Menu, Dropdown, Icon } from "antd";

class MainPage extends Component {
  
  render() {
    const menu = (
      // header
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.baidu.com/"
          >
            profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.qq.com/"
          >
            logout
          </a>
        </Menu.Item>
      </Menu>
    );
    // mainpage导航栏
    const SubMenu = Menu.SubMenu;
    return (
      <div>
        <Header>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Welcome to activity manager! <Icon type="down" />
            </a>
          </Dropdown>
        </Header>
        
        <SideBar>
          <div>logo</div>
          <NavLink
            className="App-sidebaritem"
            to="/activity"
          >
            activity
          </NavLink>
          <NavLink
            className="App-sidebaritem"
            to="/application"
          >
            application
          </NavLink>
          <NavLink
            className="App-sidebaritem"
            to="/account"
          >
            account
          </NavLink>
        </SideBar>
        <Switch>
          <Route path="/activity" component={Activity} Activity />
          <Route path="/account" component={Account} Account />
          <Route path="/application" component={Application} Application />
        </Switch>
      </div>
    );
  }

  jump(path) {
   window.history.pushState({},"",path)
  }
}

export default MainPage;

const Header = styled.div`
  max-width: 1290px;
  margin: 0px auto;
  padding: 16px 30px 0px 30px;
  text-align: right;
  position: relative;
  white-space: nowrap;
`;

const SideBar = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 110px;
  text-align: center;
  background: transparent linear-gradient(80deg, #0b4182 1%, #1a78cf 99%) repeat
    scroll 0% 0%;
  z-index: 10;
`;
const Display = styled(Switch)`
  grid-area: route-display;
`;
