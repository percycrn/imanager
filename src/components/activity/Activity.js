import React, { Component } from 'react';
import {  Tabs } from 'antd';
import ActivityList from './ActivityList';
import ActivityRecord from './ActivityRecord';

const { TabPane } = Tabs;
class Activity extends Component {
  state = {
    unjoined:data,
    joinedData: data,
  };
  render() {
    return (
      <div className="App-main">
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="join activity" key="1">
            <ActivityList data={this.state.unjoined}/>
          </TabPane>
          <TabPane tab="My Activity" key="2">
            <ActivityRecord data={this.state.joinedData}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
const data = [
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
  {
    aid: 'xxxxxxxxxxxxxxx',
    name: 'xxxxxxxxxxxxxxx',
    address: 'xxxxxxxxxxxxxxx',
    startTime: '0000/00/00 00:00',
    endTime: '0000/00/00 00:00',
    now: 0,
    max: 0,
    min: 0,
    summary: 'xxxxxxxxxxxxxxx',
    tag: ['xxx', 'xxx', 'xxx'],
    signUpTime: '0000/00/00 00:00',
    state: 'xxxxx',
  },
];
export default Activity;
