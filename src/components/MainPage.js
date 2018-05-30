import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserHistory, NavLink } from 'react-router-dom';
import Activity from './Activity';
import Account from './Account';
import Application from './Application';
import { Dropdown, Icon } from 'antd';
import  _Header  from './Header';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar>
          <div>logo</div>
          <NavLink className="App-sidebaritem" to="/activity">
            activity
          </NavLink>
          <NavLink className="App-sidebaritem" to="/application">
            application
          </NavLink>
          <NavLink className="App-sidebaritem" to="/account">
            account
          </NavLink>
        </SideBar>

        <Route path="/activity" component={Activity} Activity />
        <Route path="/account" component={Account} Account />
        <Route path="/application" component={Application} Application />
      </div>
    );
  }
}

export default MainPage;

const Header = styled(_Header)`
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
