import React, { Component } from 'react';
import { Consumer } from '../store';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LogPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App-darea">
        <div className="App-ddarea">
          <FormItem>
            <h1>Sign In</h1>
          </FormItem>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="phone number"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
              <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
              <Consumer>
                {payload => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={() => this.doLogin(payload)}
                  >
                    login
                  </Button>
                )}
              </Consumer>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }

  doLogin(payload) {

    //account check here
    //todo
    //不合法
    //todo
    //合法
    payload.log();
    this.props.history.push('/activity/list');
  }
}
LogPage = Form.create()(LogPage);
export default LogPage;
