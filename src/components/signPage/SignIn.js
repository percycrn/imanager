import React, { Component } from 'react';
import { Form, Icon, Input, Button, Modal } from 'antd';
import client from '../../client';
import gql from 'graphql-tag';

const FormItem = Form.Item;

class LogPage extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       client
  //         .mutate({
  //           mutation: querySignIn,
  //           variables: values,
  //         })
  //         .then(({ data }) => {
  //           const { res } = data;
  //           console.log(res);
  //           if (res.errorMessage) {
  //             Modal.error({ content: res.errorMessage });
  //             return;
  //           }

  //           this.props.handelSignIn();
  //         })
  //         .catch(err => {
  //           console.error(err);
  //         });
  //     }
  //   });
  // };
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
                Sign In
              </Button>
              Or <a onClick={this.props.handelSignState}>register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
const querySignIn = gql`
  mutation signin($phoneNumber: String, $password: String) {
    res: signIn(data: { password: $password, phoneNumber: $phoneNumber }) {
      errorMessage
      user {
        uid
        name
        email
        tags
        address
        phoneNumber
      }
      token
      joinedActivites {
        aid
        name
        address
        startTime
        endTime
        now
        max
        min
        summary
        tag
        signUpTime
        state
      }
    }
  }
`;
LogPage = Form.create()(LogPage);
export default LogPage;
