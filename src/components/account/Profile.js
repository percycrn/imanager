import React, { Component } from "react";
import { List, Avatar } from "antd";
const data = [
  {
    title: 'Ant Design Title 1',
  },

  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
class Profile extends Component {
  render() {
    return (
      <div className="mainpage">
        {/* mainpage */}
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Profile;
