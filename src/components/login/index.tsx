/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 18:43:07
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-13 21:29:03
 * @Description: 
 */
import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd'
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps { }

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}
export default function Login({ history }: Props): React.ReactElement {
  const onFinish = (values: any) => {
    history.push('/')
  }
  const onFinishError = (errInfo: any) => {
    console.log(errInfo);
  }
  return (
    <div style={{ width: 300, margin: '100px auto' }}>
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishError}
      >
        <Form.Item
          label='用户名'
          name='username'
          rules={[
            {
              required: true,
              message: 'please enter your name'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>记住登录</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}