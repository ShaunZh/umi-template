import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect, Dispatch, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';

import styles from './index.less';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

interface LoginProps extends ConnectProps {
  dispatch: Dispatch;
}

const Login: React.FC<LoginProps> = props => {
  const handleSubmit = (values: object) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="page-login">
      <Form
        {...layout}
        name="basic"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
