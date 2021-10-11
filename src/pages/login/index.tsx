import React, { useCallback, useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { apiLogin } from '@/service/login';
import { setToken } from '@/utils/cookie';
import { useRequest, history } from 'umi';
import './index.less';
import useEasyRequest from '@/hooks/useEasyRequest'
interface LoginValues {
    username: string;
    password: string;
    remember: boolean;
}

const Login: React.FC = () => {
    const {data, loading, run} = useRequest(apiLogin, {
        manual: true,
    })
    const onFinish = (values: LoginValues) => {
        run(values).then(res => {
            setToken(res)
            history.push('/admin')
        })
        
    };
    return (
        <div className="login-container">
            <div className="login-top">
                <span className="title">Blog Admin</span>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish} 
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名称' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入用户密码' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;
