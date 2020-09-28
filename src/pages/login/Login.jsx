import React from 'react'
import { Form, Input, Button } from "antd"
import "./login.scss"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
export default class extends React.Component {

  constructor() {
    super()
  }


  render() {
    const layout = {
      // labelCol: {
      //   span: 8,
      // },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        // offset:8,
        span: 16,
      }
    }
    return (
      <div className="login-wrap">
        <header className="login-header">React后台管理系统</header>
        <section className="login-form">
          <h2>User Login</h2>
          <Form {...layout} form={""} layout="horizontal" name="userForm">
            <Form.Item name="usernick" rules={[{ required: true }]}>
              <Input placeholder="username" prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="login-btn">Submit</Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }

}