import React, { Component } from "react";
import { Form, Input, Tooltip, Icon, Button } from "antd";
const FormItem = Form.Item;

class Profile extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="profile-mainpage">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label={
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
            style={{ margin: 0 }}
          >
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="E-mail" style={{ margin: 0 }}>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ],
            })(<Input />)}
          </FormItem>

          <FormItem label="address" style={{ margin: 0 }}>
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: "Please input your address",
                },
              ],
            })(<Input />)}
          </FormItem>

          <FormItem style={{ margin: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="profile-form-button"
            >
              Update
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
Profile = Form.create()(Profile);
export default Profile;
