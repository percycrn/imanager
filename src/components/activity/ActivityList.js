import React, { Component } from "react";
import { List } from "antd";
import axios from "axios";

class ActivityList extends Component {
  state = {
    data: [],
  };

  allActs() {
    axios
      .get(`/users/${this.props.uid}/acts`, {
        params: { type: "unjoined" },
      })
      .then(({data}) => {
        console.log(data);
        
        this.setState({ data:data});
      });
  }

  componentWillMount() {
    this.allActs();
  }

  render() {
    return (
      <div className="mainpage">
        {/* mainpage */}
        <List
          className="demo-loadmore-list"
          size="large"
          itemLayout="horizontal"
          dataSource={this.state.data}
          pagination={{
            position: "bottom",
            pageSize: 4,
            size: "large",
          }}
          renderItem={(item) => (
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

export default ActivityList;
