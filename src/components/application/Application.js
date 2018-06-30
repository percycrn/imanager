import React, { Component } from "react";
import { Menu, Dropdown, Icon, Tabs } from "antd";
import { Route, Switch, NavLink } from "react-router-dom";
import AppOccupation from "./AppOccupation";
import AppStates from "./AppStates";

const TabPane =Tabs.TabPane
class Application extends Component {
  state = {
    current: "mail",
  };
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="App-main">
        {/* title */}
        <div className="App-title">
          <h1>Manage Your Applications</h1>
        </div>
        {/* navigation */}
        <div className="App-navigation">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <NavLink to="/application/occupation">
                Application Occupation
              </NavLink>
            </Menu.Item>
            <Menu.Item key="app">
              <NavLink to="/application/states">Application States</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route
            path="/application/occupation"
            component={AppOccupation}
            AppOccupation
          />
          <Route path="/application/states" component={AppStates} AppStates />
        </Switch>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Application;
