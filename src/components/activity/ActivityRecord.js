import React, { Component } from "react";
import { List } from "antd";
class ActivityRecord extends Component {
  render() {
    return (
      <div className="mainpage">
        {/* mainpage */}
        <List
          className="demo-loadmore-list"
          size="large"
          itemLayout="horizontal"
          dataSource={this.props.data}
          pagination={{
            position: 'bottom',
            pageSize:4,
            size:"large"
          }}
          renderItem={item => (
            <List.Item actions={[<a>edit</a>]}>
              <List.Item.Meta title={item.name} description={item.address} />
              <section>
                <p>
                  <strong>Time</strong> {item.startTime} - {item.endTime}
                </p>
              </section>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ActivityRecord;
