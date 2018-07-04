//@ts-check

import React, { Component } from 'react';
import { Form, Icon, Input, Button, Modal } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class LogPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
       
        axios
          .post('/signup', values)
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              this.props.handelSignState();
            } else {
              Modal.error({ content: res.data });
            }
          })
          .catch(err => err && console.error(err));
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App-darea">
        <div className="App-ddarea">
          <FormItem>
            <h1>Sign Up</h1>
          </FormItem>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('phoneNumber', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="phone number"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign Up
              </Button>
              Or <a onClick={this.props.handelSignState}>signin now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(LogPage);
